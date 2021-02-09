import React, { useState } from 'react'
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faArrowLeft,
  faBars,
} from '@fortawesome/free-solid-svg-icons'


// ----- CONSTANTS ----- // 
const image = require('.././assets/hybrid_theory.jpg');
const { height, width } = Dimensions.get('window');
const _light = '#eeeeee',
      _grey = '#dddddd',
      _dark = '#151515',
      _blue = '#1dcce3';
    

// ----- COMPONENT ----- // 
export default function Song() {

  const [isToggleOn, setToggle] = useState({
    favourite: false,
    play: false,
  })

  return(
    <View style={ styles.main }>

      <View style={ styles.top }>
        <FontAwesomeIcon
          icon={ faArrowLeft }
          color={ _light }
          size={ 20 }
          style={ styles.icon }
        />
        <FontAwesomeIcon
          icon={ faBars }
          color={ _light }
          size={ 20 }
          style={ styles.icon }
        />
      </View>

      <View style={ styles.container }>
        <Image
          source={ image }
          style={ styles.image }
        />

        <View style={ styles.content }>
          <View style={ styles.text }>         
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
              Don't stay
            </Text>
            <Text style={{ fontSize: 14, color: _grey,}}>
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
              size={ 25 }
            />
          </TouchableOpacity>
        </View>


        <View style= { styles.buttons }>
          <View style={ styles.action }>
            <TouchableOpacity
              style={{ height: '100%', justifyContent: 'center' }}
              onPress={() => alert('Do something')}
            >
              <FontAwesomeIcon 
                icon={ faStepBackward }  
                color={ _grey} 
                size={ 25 }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ height: '100%', justifyContent: 'center' }}
              onPress={() => {
                setToggle({
                  ...isToggleOn,
                  play: !isToggleOn.play
                })
                alert('Do something')
              }}
            >
              <FontAwesomeIcon 
                icon={ isToggleOn.play ? faPauseCircle : faPlayCircle }
                color={ _grey }
                size={ 50 }
                style={ styles.icons }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ height: '100%', justifyContent: 'center' }}
              onPress={() => alert('Do something')}
            >
              <FontAwesomeIcon 
                icon={ faStepForward }  
                color={ _grey } 
                size={ 25 }
              />
            </TouchableOpacity>
          </View>
        </View>


      </View>


      
      <StatusBar
        animated={true}
        backgroundColor={_dark}
        barStyle='light-content'
        showHideTransition='none'
      />
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
  top: {
    width: '100%',
    height: '6%',
    backgroundColor: 'rgba(50, 50, 50, 0.4)'
  },
  container: {
    width: '85%',
    height: '94%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    width: '100%',
    height: width * 0.85,
    resizeMode: 'stretch'
  },
  content: {
    width: '100%', 
    height: '10%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(50, 50, 50, 0.4)'
  },
  text: {
    width: '90%',
    justifyContent: 'center',
  },
  buttons: {
    height: '10%', 
    width: '70%', 
    justifyContent: 'space-around', 
    flexDirection: 'row',
    backgroundColor: 'rgba(50, 50, 50, 0.4)',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})