import React from 'react';
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
const logo = require('../assets/fany.png')
const landing = require('../assets/landing_frame.png')

export default function Landing() {
  
  return (
    <View style={styles.container}>
      <Image 
        source={logo}
        style={styles.logo}
      />    
      <Image
        source={landing}
        style={styles.landing}
      />
      <Text style={styles.text}>
        Enjoy music{"\n"}
        in a different way
      </Text>   
      <Text style={styles.paragraph}>
        One app, all music.{"\n"} 
        Just enter the name or url and enjoy it.{"\n"}
        No complications, no advertisements.{"\n"}
        What are you waiting?{"\n"}
      </Text>
      <TouchableHighlight style={styles.fillButton}>
        <Text 
          style={styles.fillButtonText} 
          onPress={() => console.log('Must redirect to "SignUp" view')}
        >
        GET STARTED
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.emptyButton}>
        <Text 
          style={styles.emptyButtonText}
          onPress={() => console.log('Must redirect to "Log in" view')}
        >
          LOG IN
        </Text>
      </TouchableHighlight>

   
      <StatusBar style='inverted'/>
    </View>
  );
}

const _blue = '#1dcce3' // #1db is a nice color :)
const topText = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  logo: { 
    width: 80, 
    height: 80, 
    top: 60,
    right: 130
  },
  landing: { 
    width: 250,
    height: 250,
    top: -90,
    left: 80
  },
  text: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 42,
    marginBottom: 40,
    top: topText
  },
  paragraph: {
    color: '#bbb',
    fontSize: 16,
    width: 325,
    textAlign: 'justify',
    top: topText - 30,
  },
  fillButton: {
    backgroundColor: _blue,
    borderRadius: 30,
    width: 280,
    height: 54,
    top: topText + 25
  },   
  fillButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  emptyButton: {
    backgroundColor: '#111',
    borderRadius: 30,
    width:  280,    
    height: 54,
    top: topText + 30 
  },
  emptyButtonText: {
    color: _blue,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});




