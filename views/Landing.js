import React from 'react';
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


// ----- CONSTANTS ----- // 
const logo = require('../assets/fany.png')
const landing = require('../assets/landing_frame.png')
const _light = '#eeeeee',
      _blue = '#1dcce3';


// ----- COMPONENT ----- //    
export default function Landing(props) {

  const { navigation } = props;

  return (
    <View style={ styles.main }>

      <View style={ styles.imageContainer }>
        <Image source={ logo } style={ styles.logo } />    
        <Image source={ landing } style={ styles.landing } />
      </View>
      
      <View style={ styles.container }>
        <View style={ styles.content }>
          <Text style={ styles.text }>
            Enjoy music{"\n"}
            in a different way
          </Text>   
          <Text style={styles.description}>
            One app, all music.{"\n"} 
            Just enter the name or url and enjoy it.{"\n"}
            No complications, no advertisements.{"\n"}
            What are you waiting?{"\n"}
          </Text>
        </View>

        <View style={ styles.buttons }>       
          <TouchableOpacity 
            style={ styles.fillButton }
            onPress={() => navigation.navigate('Register')}
            activeOpacity={ 0.7 }
          >
            <Text style={ styles.fillButtonText }>
              GET STARTED
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ styles.emptyButton }
            onPress={() => console.log('Must redirect to "Log in" view')}
          >
            <Text style={ styles.emptyButtonText }>
              LOG IN
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
    flex: 1,
    backgroundColor: '#111',
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
    width: 80, 
    height: 80, 
    top: 45,
    left: 25,
    resizeMode: 'stretch'
  },
  landing: { 
    width: 250,
    height: 250,
    resizeMode: 'stretch'
  },

  container: {
    width: '85%',
    height: '60%',
  },
  content: {
    width: '100%',
    height: '55%',
  },
  text: {
    color: _light, 
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 'auto',
  },
  description: {
    color: '#bbb',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 'auto',
  },

  buttons: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillButton: {
    backgroundColor: _blue,
    borderRadius: 30,
    width: '85%',
    height: 50,
    marginBottom: 10,
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
    width:  '85%',    
    height: '30%',
  },
  emptyButtonText: {
    color: _blue,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});






const acciones = [ 3,5,29,6,2,8,1,19,10,24,4 ]

function dif(arr) {
  let min = arr[0];
  let max = 0;

  arr.map(i => {if(min > i) min = i})
  const minArr = arr.slice(arr.indexOf(min));
  minArr.map(i => {if(max < i) max = i})

  return {
    min,
    max, 
    ganancia: max - min
  }
} 