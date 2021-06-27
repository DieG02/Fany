import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View, 
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from 'react-native'
import Logo from './svg/logoNegative'

import { CommonActions } from '@react-navigation/native';
import { localLogIn } from '../database/firebase.js'
import {
  loadFontsAsync,
  WHITE,
  LIGHT,
  GREY,
  BLACK,
  DARK,
  MAIN,
} from './MainStyles'


// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png');
const { height } = Dimensions.get('window')


// ----- COMPONENT ----- // 
export default function Login({ navigation }) {

  const [ input, setInput ] = useState({ email: '', password: '' })
  const [loaded, setLoaded] = useState(false)

  const onChangeHandler = (name, value) => {
    setInput({...input, [name]: value })
  } 

  const asyncLogIn = async () => {
    const { code, user, errorMessage } = await localLogIn(input)
    code === 200 
    ? navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [ { name: 'MyTabBar' } ]
        })
      )
    : console.log(errorMessage)
  }

  useEffect(() => {
    const blurInputs = Keyboard.addListener('keyboardDidHide', () => Keyboard.dismiss());
    return () => blurInputs.remove();
  }, []);

  loadFontsAsync(setLoaded)
  if(!loaded) return null;
  
  return(
    <View style={styles.main}>  
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={false}/>

      <View style={styles.subContainer1}>
        <Logo style={styles.logo} width='55' height='55' />
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Bold', marginTop: '-3%' }}>
          Sign in to Fany
        </Text>
        <View style={styles.inputGroup}>
          <TextInput 
            style={styles.input}
            autoCompleteType='email'
            placeholder='Email'
            onChangeText={value => onChangeHandler('email', value)}
          />
      
          <TextInput 
            style={styles.input}
            autoCompleteType='password'
            secureTextEntry
            placeholder='Password'
            onChangeText={value => onChangeHandler('password', value)}
          />
        </View>
      </View>

     <View style={styles.subContainer2}>
        <TouchableHighlight 
          style={styles.login} 
          onPress={() => {
            asyncLogIn()
          }}
          activeOpacity={1}
          underlayColor={DARK}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.password} activeOpacity={0.5}>
          <Text style={styles.passwordText}>
            Did you forget your password?
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    backgroundColor: WHITE,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  subContainer1: {
    height: '38%',
    width: '85%',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  inputGroup: {
    height: '40%',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  input: {
    width: '100%',
    height: 45,
    color: DARK,
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 5,
    borderColor: GREY,
    borderWidth: 0.5,
    backgroundColor: 'transparent',
  },

  
  subContainer2: {
    width: '85%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: '95%',
    height: 45,
    backgroundColor: MAIN,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 15,
    color: WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
  password: {
    marginTop: 10,
    height: 30,
    justifyContent: 'center',
  },
  passwordText: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    color: MAIN,

  }
})

// onContentSizeChange={ (width, height) => this.refs.scrollView.scrollTo({ y: this.state.onInputSelectScrollViewPaddingSize} ) }