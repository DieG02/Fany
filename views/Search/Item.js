import React from 'react'
import {
  View,
  Image, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


// ----- CONSTANTS ----- //
const { width, height } = Dimensions.get('window')
const _light = '#eeeeee',
      _grey = '#cccccc',
      _blue = '#1dcce3',
      _dark = '#151515';
    



// ----- COMPONENT ----- //
export default function Item({ song, setSong, removeLastItem }) {

  const { image, title, artist, videoId } = song
  let shortTitle = title.length < 40 ? title : title.slice(0, 40).concat('...')
  return(
    <View 
      style={ styles.container }
    >    
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 30 }
        activeOpacity={ 0.6 }
        onPress={() => setSong(song)} 
      >
        <Image source={{ uri: image }} style={ styles.image }/>
        <View style={{ width: '80%', height: '80%' }}>
          <Text style={ styles.title }>
            { shortTitle }
          </Text>
          <Text style={ styles.content }>
            { artist }
          </Text>
        </View>
      </TouchableOpacity>

     <TouchableOpacity 
      style={ styles.icon }
      onPress={() => {
        removeLastItem(videoId)
      }}
     >
      <FontAwesomeIcon 
        icon={ faTimes }
        color='#aaa'
        size={ 22 }
      />
     </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginBottom: 15, 
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    resizeMode: 'cover'
  },
  dataContainer: {
    flexDirection: 'row',
    height: '100%',
    width: `${(1 - (45 / width)) * 100}%`,
    alignItems: 'center',
  },
  title: {
    marginTop: 'auto',
    fontSize: 13,
    width: '100%',
    color: _light,
    fontWeight: 'bold',
    height: 20,
  },
  content: {
    color: '#aaa',
    fontSize: 11,
    marginBottom: 'auto',
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})