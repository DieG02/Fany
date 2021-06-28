import React, { useState } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import MarqueeText from 'react-native-marquee'

import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

import { isPlaying, isFavourite } from '../../redux/actions/uiAction'
import Controls from './Controls'
import { loadFontsAsync, WHITE, GREY_W, MAIN } from '../MainStyles'

// ----- CONSTANTS ----- // 
const { width } = Dimensions.get('window');
const colorsGradient = ['transparent', '#151515A0', '#101010'],
      locationsGradient = [0.7, 0.85, 0.95];


// ----- COMPONENT ----- // 
export default function Song({ navigation }) {

  const [loaded, setLoaded] = useState(false)
  loadFontsAsync(setLoaded);

  const { image, title, artist, duration, favourite } = useSelector(state => state.app.song)
  const dispatch = useDispatch()

  const isFavouriteDispatch = (value) => dispatch(isFavourite(value));

  const time = (ms) => {
    const a = ms / 1000   // 251,821
    const b = Math.floor(a / 60)  // 251,9
    const c = Math.floor(a - (60 * b))
    return `${b}:${c > 10 ? c : '0' + c}`
  }

  if(!loaded) return null;
  return(
    <View style={ styles.main }>
      <StatusBar translucent={true} barStyle='light-content' />
      <ImageBackground source={{ uri: image }} blurRadius={ 15 } style={styles.imageBackground} />
      <LinearGradient colors={ colorsGradient } locations={ locationsGradient } style={ styles.background }/>

      <View style={ styles.header }>
        <TouchableOpacity 
          style={ styles.icons }
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-small-left" size={25} color={WHITE} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.icons }
          onPress={() => navigation.navigate('Home')} 
        >
          <Ionicons name="menu-outline" size={24} color={WHITE} />
        </TouchableOpacity>
      </View>

      <View style={ styles.container }>
        <View style={{ height: '60%', width: '100%', justifyContent: 'center' }} >
          <Image source={{ uri: image }} style={ styles.image } />
        </View>

        <View style={{ height: '30%', width: '100%', justifyContent: 'flex-start' }} >
          <View style={ styles.content }>
            <View style={{ width: '88%' }}>         
              <MarqueeText
                style={{ fontSize: 20, color: WHITE, fontFamily: 'Poppins-SemiBold' }}
                loop
                duration={title.length * 200}
                marqueeOnStart={true}
                marqueeDelay={1750}
                marqueeResetDelay={1250}
              >
                { title } 
              </MarqueeText>
                
              <Text style={{ fontSize: 12, color: GREY_W, fontFamily: 'Poppins' }}>
                { artist }  •  { duration ? time(duration) : '00:00' }
              </Text>
            </View>

            <TouchableOpacity
              style={styles.favourite}
              onPress={() => isFavouriteDispatch(!favourite) }
            >
              {favourite 
                ? <AntDesign name="heart" size={20} color={MAIN} />
                : <AntDesign name="hearto" size={20} color={GREY_W} />
              }
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
    height: '100%', 
    width: '100%',
    backgroundColor: 'transparent',
  },
  imageBackground: {
    position: 'absolute',
    top: '-10%',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
    transform: [{ rotate: '180deg' }]
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    width: '100%',
    maxHeight: 45, // 50 and icons 25 original
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: StatusBar.currentHeight,
  },
  icons: {
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
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favourite: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})