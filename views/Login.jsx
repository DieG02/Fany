import React, { useState } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View, 
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { localLogIn } from '../database/firebase.js'
import {
  loadFontsAsync,
  WHITE,
  LIGHT,
  BLACK,
  DARK,
  MAIN,
} from './MainStyles'


// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png');
const { height, width } = Dimensions.get('window')


// ----- COMPONENT ----- // 
export default function Login({ navigation }) {

  const [ input, setInput ] = useState({ email: '', password: '' })
  const onChangeHandler = (name, value) => {
    setInput({...input, [name]: value })
  } 
  
  const [loaded, setLoaded] = useState(false)
  loadFontsAsync(setLoaded)
  if(!loaded) return null;

  
  return(
    <View style={styles.main}>  
      <StatusBar style='dark'/>
      
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: MAIN }]}>
          <Image
            source={logo}
            style={styles.logo}
          />
        </View>
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Bold' }}>
          Sign in to Fany
        </Text>
        <View style={styles.inputs}>
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

     <View style={styles.div}>
      
        <TouchableHighlight 
          style={styles.local} 
          onPress={() => localLogIn(input, navigation)}
          activeOpacity={0.4}
          underlayColor='#000'
        >
          <Text style={styles.localText}>
            Log in
          </Text>
        </TouchableHighlight>
        
      </View>

    </View>
  )
}

const totalH = Math.floor(height);

// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    width: width,
    height: height,
    justifyContent: 'space-around',
  },
  container: {
    height: totalH * 0.4,
    width: '85%',
    marginTop: totalH * 0.1,
    justifyContent: 'space-between',
  },
  header: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  label: {
    fontSize: 15,
    color: '#ddd',
    marginTop: height > 725 ? '10%' : '7%',  
  },
  inputs: {
    height: '50%',
    justifyContent: 'space-around',
  },
  input: {
    width: '100%',
    height: 40,
    color: DARK,
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 6,
    borderColor: LIGHT,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },

  
  div: {
    width: '85%',
    height: '25%',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  local: {
    width: '95%',
    height: 45,
    backgroundColor: MAIN,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  localText: {
    fontSize: 19,
    color: WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
})

// onContentSizeChange={ (width, height) => this.refs.scrollView.scrollTo({ y: this.state.onInputSelectScrollViewPaddingSize} ) }