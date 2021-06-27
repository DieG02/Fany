import React from 'react'
import {
  View,
  Text,
  Image, 
  ImageBackground,
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
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faArrowLeft,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import Controls from './Controls.js'



// ----- CONSTANTS ----- // 
const { width } = Dimensions.get('window');
const _light = '#ffffff',
      _grey = '#dddddd',
      _dark = '#151515',
      _blue = '#1dcce3';
// const colorsGradient = ['#71BAC3', '#5D93A5', '#44637E', '#243442', '#111111'],
// locationsGradient = [0.05, 0.2, 0.35, 0.55, 0.75];
const colorsGradient = ['transparent', '#151515', '#101010'],
locationsGradient = [0.7, 0.9, 0.95];




// ----- COMPONENT ----- // 
export default function Song({ navigation }) {
  console.log(StatusBar.currentHeight);
  const { image, title, artist, duration, favourite } = useSelector(state => state.app.song)
  const dispatch = useDispatch()

  const isPlayingDispatch = (value) => dispatch(isPlaying(value)),
        isFavouriteDispatch = (value) => dispatch(isFavourite(value));


  const time = (ms) => {
    const a = ms / 1000   // 251,821
    const b = Math.floor(a / 60)
    const c = Math.floor(a - (60 * b))
    return `${b}:${c > 10 ? c : '0' + c}`
  }

  return(
    <View style={ styles.main }>
      <StatusBar translucent={true} barStyle='light-content' />
      <ImageBackground source={{ uri: image }} blurRadius={ 20 } style={styles.imageBackground} />
      <LinearGradient colors={ colorsGradient } locations={ locationsGradient } style={ styles.background }/>

      <View style={ styles.top }>
        <TouchableOpacity 
          style={ styles.iconBox }
          onPress={() => {
            navigation.goBack()
          }}
        >
          {/* <Feather name="arrow-left" size={23} color={ _light } /> */}
          <Entypo name="chevron-small-left" size={25} color={_light} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.iconBox }
          onPress={() => {
            navigation.navigate('Home')
          }} 
        >
          <Ionicons name="menu-outline" size={24} color={_light} />
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
          }}
        >
          <View style={ styles.content }>
            <View style={ styles.text }>         
              <MarqueeText
                style={{ fontSize: 20, color: _light, fontWeight: 'bold' }}
                duration={title.length * 200}
                marqueeOnStart={ true }
                loop
                marqueeDelay={1750}
                marqueeResetDelay={1250}
              >
                { title } 
              </MarqueeText>
                
              <Text style={{ fontSize: 13, color: '#999' }}>
                { artist }  •  { duration ? time(duration) : '00:00' }
              </Text>
            </View>

            <TouchableOpacity
              style={{ height: '100%', justifyContent: 'center' }}
              onPress={() => {
                isFavouriteDispatch(!favourite)
                favourite !== true && alert('Add to Favourites')
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
    flex: 1, 
    backgroundColor: 'transparent',
    width: '100%',
  },
  imageBackground: {
    position: 'absolute',
    top: '-10%',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: StatusBar.currentHeight,
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
    resizeMode: 'cover' // 'contain'
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
    width: '87%',
    justifyContent: 'center',
  },
})