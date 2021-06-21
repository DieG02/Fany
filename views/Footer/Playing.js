import React, { useEffect } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import MarqueeText from 'react-native-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { isPlaying, isFavourite } from '../../redux/actions/uiAction.js'
import { loadSound, pauseSound, playSound, isLooping } from '../../redux/actions/soundAction.js'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
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
          style={{ width:  75, height: 74 }}
        />

        <View style={ styles.textContent }>
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
         
          <MarqueeText 
            style={ styles.content }
            duration={artist.length * 120}
            marqueeOnStart={ true }
            loop
            marqueeDelay={1000}
            marqueeResetDelay={750}
          >
            { artist }  •  { duration ? time(duration) : '00:00' }
          </MarqueeText>
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1 }}> 
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            isFavouriteDispatch(!favourite)
            !!favourite ? isLooping(true, sound) : isLooping(false, sound)
          }}
        >
          {favourite 
            ? <AntDesign name="heart" size={20} color="#1dcce3" />
            : <AntDesign name="hearto" size={20} color="#999" />
          }
        </TouchableOpacity>
      </View>    

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            isPlayingDispatch(!playing)
            playing ? pauseSound(sound) : playSound(sound);
          }}
        >
          {playing 
            ? <Ionicons name='pause' size={28} color='#FFF' />
            : <Ionicons name='play' size={28} color='#FFF' />
          }
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
    backgroundColor: '#151515',
    marginBottom: 1,
  },
  song: {
    flexDirection: 'row',
    height: '100%',
    width: '75%',
    marginRight: 5,
  },

  textContent: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  title: {
    width: '100%',
    color: '#EEE',
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

  icons: {
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  }
})