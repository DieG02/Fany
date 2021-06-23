import React, { useState, useEffect } from 'react'
import {
  View, 
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard,
  StatusBar
} from 'react-native'

import SvgGoogle from './svg/google'
import {
  localSignUp,
  googleSignIn,
  signInWithGoogleAsync
} from '../database/firebase'
import { 
  loadFontsAsync,
  MAIN, 
  WHITE,
  BLACK,
  DARK,
  GREY
} from './MainStyles'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png')


// ----- COMPONENT ----- // 
export default function Register({ navigation }) {

  useEffect(() => {
    const bluringInputs = Keyboard.addListener('keyboardDidHide', () => Keyboard.dismiss());
    return () => bluringInputs.remove();
  }, []);

  const [input, setInput] = useState({ 
    // username: '', 
    email: '', 
    password: ''
  });
  const [loaded, setLoaded] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const onChangeHandler = (name, value) => {
    setInput({ ...input, [name]: value })
  } 
  
  const validation = () => {
    for(let property in input) {
      if(!input[property].replace(/ /g, '').length > 0) return false
    }
    return true;
  }

  loadFontsAsync(setLoaded)
  if (!loaded) return null;

  return(
    <View style={styles.container}>  
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={false}/>
      <Image source={logo} style={styles.logo} />

      <View style={styles.inputGroup}>
        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold', color: BLACK, marginRight: 'auto' }}>
          Create your account
        </Text>
        <View>
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput 
            style={styles.input}
            placeholder='username2021'
            onChangeText={(value) => {
              console.log('Username here'); 
              //  onChangeHandler('username', value)
            }}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput 
            style={[styles.input]}
            autoCompleteType='email'
            placeholder='example@email.com'
            onChangeText={(value) => onChangeHandler('email', value)}
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput 
            style={styles.input}
            autoCompleteType='password'
            secureTextEntry={true}
            placeholder='8 characters min'
            onChangeText={(value) => onChangeHandler('password', value)}
          /> 
        </View>
        <BouncyCheckbox
          size={25}
          fillColor={MAIN}
          unfillColor={WHITE}
          text='I agree to the terms and conditions'
          style={{ marginBottom: 10 }}
          iconStyle={{ borderColor: MAIN }}
          textStyle={{ fontFamily: 'Poppins', color: DARK, fontSize: 13, marginLeft: -7 }}
          onPress={() => setSelection(!isSelected)}
        />
      </View>
        
      <View style={{  width: '85%', alignItems: 'center', marginTop: 25 }}>

        <TouchableHighlight
          style={[styles.local, { backgroundColor: isSelected ? MAIN : GREY }]}
          onPress={() => {
            validation() ? localSignUp(input, navigation) : alert('Complete all inputs')
          }}
          activeOpacity={0.9}
          underlayColor={DARK}
          disabled={!isSelected}
        >
          <Text style={styles.localText}>
            Sign up
          </Text>
        </TouchableHighlight>

        <View style={{ width: '100%' }}>
          <TouchableOpacity
            style={styles.google}
            onPress={() => signInWithGoogleAsync(navigation)}
            activeOpacity={0.4}
          > 
              <SvgGoogle width={23} height={23} />
              <Text style={styles.googleText}>
                Continue with Google
              </Text>
          </TouchableOpacity>
        </View>
      </View>   
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 55,
    marginTop: '5%',
    resizeMode: 'contain'
  },
  inputGroup: {
    width: '85%',
    height:'50%',
    justifyContent: 'space-around',
  },
  inputTitle: {
    fontSize: 13,
    color: DARK,
    fontFamily: 'Poppins',
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

  local: {
    width: '100%',
    height:  40,
    marginTop: 20,
    backgroundColor: MAIN,
    borderRadius: 25,
    justifyContent: 'center',
  },
  localText: {
    fontSize: 14,
    color: WHITE,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  
  google: {
    width: '95%',
    height: 40,
    backgroundColor: WHITE,
    borderRadius: 25,
    borderColor: GREY,
    borderWidth: 0.5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  googleText: {
    color: GREY,
    fontSize: 14,
    fontFamily: 'Poppins',
    marginLeft: 10,
    marginTop: 3,
  },
})