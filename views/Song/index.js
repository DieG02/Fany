import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faArrowLeft,
  faBars,
  faReply,
  faReplyAll,
} from '@fortawesome/free-solid-svg-icons'
import Controls from './Controls.js'



// ----- CONSTANTS ----- // 
const IMAGE = require('../../assets/hybrid_theory.jpg');
const { width } = Dimensions.get('window');
const _light = '#eeeeee',
_grey = '#dddddd',
_dark = '#151515',
_blue = '#1dcce3';
const colorsGradient = ['#71BAC3', '#5D93A5', '#44637E', '#243442', '#111111'],
locationsGradient = [0.05, 0.2, 0.4, 0.6, 0.85];




// ----- COMPONENT ----- // 
export default function Song({ navigation}) {

  const [isToggleOn, setToggle] = useState({
    favourite: false,
    play: false,
    save: false,
    icon: 'noRepeat',
    loop: {
      noRepeat: [faReply, _grey],
      repeat: [faReply, _blue],
      repeatOne: [faReplyAll, _blue]
    }
  })


  return(
    <View style={ styles.main }>

      <LinearGradient
        // Background Linear Gradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={styles.background}
      />
      <StatusBar
        animated={true}
        backgroundColor={_dark}
        barStyle='light-content'
      />

      <View style={ styles.top }>
        <TouchableOpacity 
          style={ styles.iconBox }
          onPress={() => {
            navigation.pop()
          }}
        >
          <FontAwesomeIcon
            icon={ faArrowLeft }
            color={ _light }
            size={ 25 }
          />
        </TouchableOpacity>
        <TouchableOpacity style={ styles.iconBox }>
          <FontAwesomeIcon
            icon={ faBars }
            color={ _light }
            size={ 25 }
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.container }>
        <View 
          style={{ 
            height: '60%', 
            width: '100%', 
            justifyContent: 'center', 
            // backgroundColor: '#ff0000' 
          }}
        >
          <Image
            source={ IMAGE }
            style={ styles.image }
          />
        </View>

        <View 
          style={{ 
            height: '30%', 
            width: '100%', 
            justifyContent: 'flex-start', 
            // backgroundColor: '#ff0000' 
          }}
        >
          <View style={ styles.content }>
              <View style={ styles.text }>         
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                  Don't stay - Live in texas
                </Text>
                <Text style={{ fontSize: 13, color: _grey }}>
                  Hybrid Theory
                </Text>
              </View>

              <TouchableOpacity
                style={{ height: '100%', justifyContent: 'center' }}
                onPress={() => {
                  setToggle({
                    ...isToggleOn,
                    favourite: !isToggleOn.favourite
                  })
                  isToggleOn.favourite !== true ?
                    alert('Add to Favourites')
                  :
                    alert('Remove from Favourites')
                }}
              >
                <FontAwesomeIcon 
                  icon={ isToggleOn.favourite ? faHeartFill : faHeart }  
                  color={ isToggleOn.favourite ? _blue : _grey} 
                  size={ 20 }
                />
              </TouchableOpacity>
            </View>
            
            <Controls setToggle={ setToggle } isToggleOn={ isToggleOn }/>
  
          </View>
        </View>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#67a4b3',
    width: '100%',
    height: '100%', 
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  top: {
    width: '100%',
    minHeight: 50,
    backgroundColor: 'rgba(50, 50, 50, 0.3)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '85%',
    height: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: width * 0.85,
    resizeMode: 'stretch'
  },
  content: {
    width: '100%', 
    height: '30%', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  text: {
    width: '90%',
    justifyContent: 'center',
  },
})