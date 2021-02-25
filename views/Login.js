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
import SvgLogin from './svg/loginFrame.js'
import SvgGoogle from './svg/google.js'
import firebase from '../database/firebase.js'


// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png')
const { height, width } = Dimensions.get('window')
const _blue = '#1dcce3';



// ----- COMPONENT ----- // 
export default function Login({ navigation }) {

  const [ values, setValues ] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  } 
  
  const localLogIn = async () => {
    if(values.email === '') alert('Please provide a email');
    else {
      console.log(values)
      await firebase.db.collection('users').add({
        email: values.email,
        password: values.password
      })
      navigation.navigate('Home')
    }
  }



  return(
    <View style={styles.main}>  

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={logo}
            style={styles.logo}
          />
        <Text style={styles.label}>----------   Log In   ----------</Text>
        </View>
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
            placeholder='Password'
            onChangeText={value => onChangeHandler('password', value)}
          />
        </View>
      </View>

     <View style={styles.div}>
      
        <TouchableHighlight 
          style={styles.local} 
          onPress={() => localLogIn()}
          activeOpacity={0.4}
          underlayColor='#000'
        >
          <Text style={styles.localText}>
            LOG IN
          </Text>
        </TouchableHighlight>
        
        <TouchableHighlight 
          style={styles.google}
          onPress={() => console.log(values)}
          activeOpacity={1}
          underlayColor='#eee'
        >
          <View style={{flex: 1, justifyContent: 'center'}}>
            <SvgGoogle 
            style={styles.googleLogo}
              width={28}
              height={28}
            />
            <Text style={styles.googleText}>
              Continue with Google
            </Text>
          </View>         
        </TouchableHighlight>
      </View>

      <SvgLogin
        style={styles.login}
        color={_blue}
      />

      <StatusBar style='light'/>
    </View>
  )
}

const totalH = Math.floor(height);
const totalW = width;

// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#111',
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
    width: 80,
    height: 80,
    resizeMode: 'stretch'
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
    color: '#222',
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

  
  div: {
    width: '85%',
    height: '25%',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  local: {
    width: '80%',
    height:  45,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: _blue,
    marginTop: '-5%',
  },
  localText: {
    fontSize: height > 725 ? 21 : 19,
    color: _blue,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  google: {
    width: '80%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: '7%',
  },
  googleLogo: {
    left: '11%',
    top: 12
  },
  googleText: {
    color: '#666',
    fontSize: 17,
    left: '25%',
    bottom: 15,
  },
  login: {
    position: 'absolute',
    top: height > 720 ? totalH - 210 : totalH - 240,
  }
})

// onContentSizeChange={ (width, height) => this.refs.scrollView.scrollTo({ y: this.state.onInputSelectScrollViewPaddingSize} ) }