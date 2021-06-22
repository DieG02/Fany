import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { 
  loadFontsAsync,
  MAIN,
  WHITE,
  LIGHT,
  BLACK,
}  from './MainStyles'

// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png')
const landing = require('../assets/landing_frame.png');

// ----- COMPONENT ----- //    
export default function Landing({ navigation }) {
  const [loaded, setLoaded] = useState(false)
  loadFontsAsync(setLoaded)
  if(!loaded) return null;


  return (
    <View style={ styles.main }>
      <View style={ styles.imageContainer }>
        <Image source={ logo } style={ styles.logo } />    
        <Image source={ landing } style={ styles.landing } />
      </View>
      
      <View style={{ width: '85%', height: '60%' }}>
        <View style={{ height: '55%' }}>
          <Text style={ styles.title }>
            Enjoy music{"\n"}
            in a different way
          </Text>   
          <Text style={styles.description}>
            One app, all music.{"\n"} 
            Just enter the name or url and enjoy it.{"\n"}
            {/* No complications, no advertisements.{"\n"}
            What are you waiting?{"\n"} */}
          </Text>
        </View>

        <View style={ styles.buttons }>       
          <TouchableOpacity 
            style={[styles.buttonBody, { backgroundColor: MAIN }]}
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonsText, { color: BLACK }]}>
              GET STARTED
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.buttonBody}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.6}
          >
            <Text style={[styles.buttonsText, { fontFamily: 'Poppins-Light', fontSize: 13 }]}>
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      <StatusBar style='inverted'/>
    </View>
  );
}



// ----- STYLERS ----- //

const styles = StyleSheet.create({
  main: {
    backgroundColor: BLACK,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  imageContainer: {
    flex: 1,
    maxHeight: '40%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: { 
    width: 70, 
    height: 70, 
    top: 50,
    left: 25,
    resizeMode: 'contain'
  },
  landing: { 
    width: 245,
    height: 245,
    resizeMode: 'stretch'
  },

  title: {
    color: LIGHT, 
    fontSize: 35,
    marginTop: 'auto',
    fontFamily:  'Poppins-SemiBold',
  },
  description: {
    color: '#CCC',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 'auto',
    fontFamily: 'Poppins-Light',
  },

  buttons: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBody: {
    borderRadius: 30,
    width: '80%',
    height: 40,
    marginTop: '2%',
  },
  buttonsText: {
    color: MAIN, 
    fontSize: 17,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'Poppins-SemiBold',
  },
});






