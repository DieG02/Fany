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
import SvgRegister from './svg/registerFrame.js'
import SvgGoogle from './svg/google.js'
import firebase from '../database/firebase.js'


// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png')
const { height } = Dimensions.get('window')
const _blue = '#1dcce3';



// ----- COMPONENT ----- // 
export default function Register({ navigation }) {


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
  
  const localSignIn = async () => {
    if(values.email === '') alert('Please provide a email');
    else {
      console.log(values)
      await firebase.db.collection('users').add({
        email: values.email,
        password: values.password
      })
      navigation.navigate('MyTabBar')
    }
  }



  return(
    <View style={styles.container}>  
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.label}>----------   Sign up   ----------</Text>

     <View style={styles.div}>
        <Text style={styles.inputTitle}>What is your email?</Text>
        <TextInput 
          style={styles.input}
          autoCompleteType='email'
          placeholder='example@gmail.com'
          onChangeText={value => onChangeHandler('email', value)}
        />
    
        <Text style={styles.inputTitle}>Enter your password</Text>
        <TextInput 
          style={styles.input}
          autoCompleteType='password'
          placeholder='8 characters min'
          onChangeText={value => onChangeHandler('password', value)}
        />
     
      
        <TouchableHighlight 
          style={styles.local} 
          onPress={() => localSignIn()}
          activeOpacity={0.8}
          underlayColor='#289ead'
        >
          <Text style={styles.localText}>
            SIGN UP
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

      {/* <Image
        source={register}
        style={styles.register}
      /> */}
      <SvgRegister
        style={styles.register}
        color={_blue}
      />

      <StatusBar style='light'/>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: height > 725 ? '15%' : '10%',
    resizeMode: 'stretch'
  },
  div: {
    width: '85%',
  },
  label: {
    fontSize: 15,
    color: '#ddd',
    marginTop: height > 725 ? '10%' : '7%',
  },
  inputTitle: {
    fontSize: 15,
    color: '#ddd',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    color: '#888',
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: height > 725 ? 15 : 10,
  },
  local: {
    width: '85%',
    height:  45,
    marginTop: height > 725 ? 130 : 95,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 5,
    backgroundColor: _blue,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  localText: {
    fontSize: height > 725 ? 21 : 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  
  google: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: height > 725 ? 30 : 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 58
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
  register: {
    bottom: height > 725 ?  190 : 170,
  }
})