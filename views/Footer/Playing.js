import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity // TouchableHighlight --> Show us a border / dark background
} from 'react-native'
import MarqueeText from 'react-native-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { isPlaying, isFavourite } from '../../redux/actions/uiAction.js'
import { loadSound, pauseSound, playSound, isLooping } from '../../redux/actions/soundAction.js'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons'



export default function Playing() {

  const { url, image, title, artist, duration, favourite, playing } = useSelector(state => state.app.song)
  const sound = useSelector(state => state.audio.sound);
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const isPlayingDispatch = (value) => dispatch(isPlaying(value)),
        isFavouriteDispatch = (value) => dispatch(isFavourite(value));

  const time = (ms) => {
    const a = ms / 1000   // 251,821
    const b = Math.floor(a / 60)
    const c = Math.floor(a - (60 * b))
    return `${b}:${c > 10 ? c : '0' + c}`
  }

  useEffect(() => { 
    isPlayingDispatch(true)
    console.log(url)
    url && loadSound(url, dispatch)
  }, [url])

  useEffect(() => {
    return sound.unloadAsync
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);



  return(
    <View style={ styles.container }>

      <TouchableOpacity
        style={ styles.song }
        delayPressIn={ 10 }
        activeOpacity={ 0.5 }
        onPress={() => {
          navigation.navigate('Song')
        }}
      >
        <Image 
          source={{ uri: image }}
          style={ styles.image }
        />

        <View style={ styles.dataContainer }>
          <MarqueeText
            style={ styles.title }
            duration={title.length * 200}
            marqueeOnStart={ true }
            loop
            marqueeDelay={1500}
            marqueeResetDelay={1000}
          >
            { title } 
          </MarqueeText>
         
          <MarqueeText style={ styles.content }>
            { artist }  •  { duration ? time(duration) : '00:00' }
          </MarqueeText>
        </View>
      </TouchableOpacity>

      <View style={ styles.itemBox }> 
        <TouchableOpacity
          onPress={() => {
            isFavouriteDispatch(!favourite)
            favourite !== true ?
              isLooping(true, sound)
            :
              isLooping(false, sound)
          }}
          style={{ height: '100%' }}
        >
          <FontAwesomeIcon 
            icon={ favourite ? faHeartFill : faHeart }  
            color={ favourite ? '#1dcce3' : '#999'} 
            size={ 23 }
            style={ [styles.itemBox, styles.icons] }
          />
        </TouchableOpacity>
      </View>    

      <View style={ styles.itemBox }>
        <TouchableOpacity
          onPress={() => {
            isPlayingDispatch(!playing)
            playing ? pauseSound(sound) : playSound(sound);
          }}
          style={{ height: '100%' }}
        >
          <FontAwesomeIcon 
            icon={ playing ? faPause : faPlay }
            color='#fff'
            size={ 23 }
            style={ styles.icons }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 74,
    width: '100%',
    backgroundColor: '#222',
    marginBottom: 1,
  },

  song: {
    flexDirection: 'row',
    height: '100%',
    width: '75%',
    backgroundColor: '#222',
  },
  image: {
    width:  75,
    height:  74,
  },
  dataContainer: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  title: {
    width: '100%',
    color: '#ccc',
    fontSize:  13,
    fontWeight: 'bold',
    marginRight: 15,

  },
  content: {
    width: '100%',
    color: '#999',  
    fontSize:  11,
    marginRight: 15,
  },
  itemBox: {
    flex: 1, 
  },
  icons: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
})