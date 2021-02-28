import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setSong } from '../../redux/actions/uiAction.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons'


// ----- CONSTANTS ----- //
const { width, height } = Dimensions.get('window')
const image = require('../../assets/neffex.jpg')
const _light = '#eeeeee',
      _grey = '#cccccc',
      _blue = '#1dcce3',
      _dark = '#151515';
    


// ----- COMPONENT ----- //
export default function Result({ videoId, data }) {

  //         Artist       Image      Name
  const { channelTitle, thumbnails, title } = data;

  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"");
  const song = useSelector(state => state.app.song)
  const dispatch = useDispatch();

  let color = song.title === name ? _blue : _light;

  return(
    <View style={ styles.container }>
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 20 }
        activeOpacity={ 0.5 }
        onPress={() => {
          dispatch(setSong({
            image: thumbnails.high.url,
            title: name,
            artist: channelTitle,
            url: `https://www.youtube.com/watch?v=${videoId}`
          }))
        }}
      >
        <Image
          source={{ uri: thumbnails.high.url }}    
          style={ styles.image }
        />
        <View style={{ width: '60%', justifyContent: 'space-around' }}>
          <Text style={[styles.title, { color: color }]}>{ name }</Text>
          <Text style={ styles.content }>{ channelTitle }</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.icon }
        activeOpacity={ 0.5 }
        onPress={() => console.log('Add to playlist')}
      >
        <FontAwesomeIcon
          icon={ faPlus }
          size={ 20 }
          color={ _grey }
        />
      </TouchableOpacity>
    </View>
  )
}



// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    backgroundColor: _dark,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 15,
  },
  dataContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '90%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  title: {
    color: _light,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 'auto',
    width: '120%',
    
  },
  content: {
    color: _grey,
    fontSize: 11,
    marginBottom: 'auto',
  },
  icon: {
    width: '10%',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})