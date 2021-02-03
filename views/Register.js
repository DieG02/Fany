import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import SvgRegister from './svg/registerFrame.js'
import SvgGoogle from './svg/google.js'

import {
  StyleSheet,
  Text,
  View, 
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native'


const logo = require('../assets/fany.png')
const { width, height } = Dimensions.get('window')


export default function Register() {
  const [ values, onChangeHandler ] = useState({
    email: '',
    password: '',
  })

  return(
    <View style={styles.container}>  
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.label}>----------   Sign in   ----------</Text>

     <View style={styles.div}>
        <Text style={styles.inputTitle}>What is your email?</Text>
        <TextInput 
          style={styles.input}
          autoCompleteType='email'
          placeholder='example@gmail.com'
          onChangeText={value => onChangeHandler({...values, email: value})}
        />
    
        <Text style={styles.inputTitle}>Enter your password</Text>
        <TextInput 
          style={styles.input}
          autoCompleteType='password'
          placeholder='8 characters min'
          onChangeText={value => onChangeHandler({...values, password: value})}
        />
     
      
        <TouchableHighlight 
          style={styles.local} 
          onPress={() => console.log(values)}
          activeOpacity={0.8}
          underlayColor='#289ead'
        >
          <Text style={styles.localText}>
            SIGN IN
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
              width={height > 600 ? 30 : 27}
              height={height > 600 ? 33 : 30}
            />
            <Text style={styles.googleText}>
              Sign in with Google
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

const _blue = '#1dcce3'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  logo: {
    width: height > 600 ? 101 : 80,
    height: height > 600 ? 100 : 79,
    marginTop: height > 600 ? '15%' : '10%',
  },
  div: {
    width: '87%',
  },
  label: {
    fontSize: height > 600 ? 16 : 15,
    color: '#ddd',
    marginTop: height > 600 ? '10%' : '7%',
  },
  inputTitle: {
    fontSize: height > 600 ? 16: 14,
    color: '#ddd',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: height > 600 ? 40 : 35,
    color: '#888',
    fontSize: 15,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: height > 600 ? 15 : -10,
  },
  local: {
    width: '100%',
    height:  height > 600 ? 45 : 39,
    marginTop: height > 600 ? 130 : 95,
    zIndex: 5,
    backgroundColor: _blue,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  localText: {
    fontSize: height > 600 ? 21 : 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  google: {
    width: '100%',
    height: height > 600 ? 45 : 39,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: height > 600 ? 30 : 15,
    zIndex: 58
  },
  googleLogo: {
    left: '15%',  // 30% looks good
    top: 13
  },
  googleText: {
    color: '#666',
    fontSize: height > 600 ? 20 : 18,
    left: '30%',  // 30% looks good
    bottom: 17,
  },
  register: {
    bottom: height > 600 ?  190 : 150,
  }
})