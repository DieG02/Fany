import React from 'react'
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native'
import MarqueeText from 'react-native-marquee'
import { isPlaying, isFavourite } from '../../redux/actions/uiAction.js'
import { useSelector, useDispatch } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faArrowLeft,
  faBars,
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
export default function Song({ navigation }) {

  const { image, title, artist, duration, favourite } = useSelector(state => state.app.song)
  const dispatch = useDispatch()

  const isPlayingDispatch = (value) => dispatch(isPlaying(value)),
        isFavouriteDispatch = (value) => dispatch(isFavourite(value));



  return(
    <View style={ styles.main }>

      <LinearGradient
        // Background Linear Gradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={styles.background}
      />
      <StatusBar
        translucent={false}
        backgroundColor={_dark}
        barStyle='light-content'
      />

      <View style={ styles.top }>
        <TouchableOpacity 
          style={ styles.iconBox }
          onPress={() => {
            navigation.goBack()
          }}
        >
          <FontAwesomeIcon
            icon={ faArrowLeft }
            color={ _light }
            size={ 23 }
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.iconBox }
          onPress={() => {
            navigation.navigate('Home')
          }} 
        >
          <FontAwesomeIcon
            icon={ faBars }
            color={ _light }
            size={ 23 }
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.container }>
        <View 
          style={{ 
            height: '60%', 
            width: '100%', 
            justifyContent: 'center', 
            // backgroundColor: '#000' 
          }}
        >
          <Image
            source={{ uri: image }}
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
                <MarqueeText
                  style={{ fontSize: 20, color: _grey, fontWeight: 'bold' }}
                  duration={title.length * 85}
                  marqueeOnStart={ true }
                  loop
                  marqueeDelay={1500}
                  marqueeResetDelay={1000}
                >
                  { title } 
                </MarqueeText>
                  
                <Text style={{ fontSize: 13, color: '#999' }}>
                  { artist }
                </Text>
              </View>

              <TouchableOpacity
                style={{ height: '100%', justifyContent: 'center' }}
                onPress={() => {
                  isFavouriteDispatch(!favourite)
                  favourite !== true ?
                    alert('Add to Favourites')
                  :
                    alert('Remove from Favourites')
                }}
              >
                <FontAwesomeIcon 
                  icon={ favourite ? faHeartFill : faHeart }  
                  color={ favourite ? _blue : _grey} 
                  size={ 20 }
                />
              </TouchableOpacity>
            </View>
            
            <Controls/>
  
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
    maxHeight: 45, // 50 and icons 25 original
    backgroundColor: 'rgba(50, 50, 50, 0.0)',
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
    resizeMode: 'cover'
  },
  content: {
    width: '100%', 
    height: '30%', 
    marginTop: '5%',
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