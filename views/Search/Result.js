import React, { useState, useEffect } from 'react'
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
import { GOOGLE_API_KEY } from '@env'


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
  const { channelTitle, thumbnails, title,  } = data;

  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
  const song = useSelector(state => state.app.song);
  const dispatch = useDispatch();
  
  let color = song.videoId === videoId ? _blue : _grey;
  let shortName = name.length < 65 ? name : name.slice(0, 65).concat('...')
  // const [ extraData, setExtraData ] = useState()

  
  // const search = function(){
  //   fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${GOOGLE_API_KEY}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     setExtraData(data.items[0].snippet.thumbnails)
  //     console.log(data.items[0].snippet.thumbnails)
  //   })
  // }

  // useEffect(() => {
  //   search()
  // })
  
  return(
    <View style={ styles.container }>
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 20 }
        activeOpacity={ 0.5 }
        onPress={() => {
          dispatch(setSong({
            iconImage: thumbnails.high.url,
            image: thumbnails.high.url,
            title: name,
            artist: channelTitle,
            url: `https://www.youtube.com/watch?v=${videoId}`,
            videoId: videoId,
          }))
        }}
      >
        <Image
          source={{ uri: thumbnails.high.url }}    
          style={ styles.image }
        />
        <View style={{ width: '60%', justifyContent: 'space-around' }}>
          <Text style={[ styles.title, { color: color }]}>{ shortName }</Text>
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
    color: '#aaa',
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