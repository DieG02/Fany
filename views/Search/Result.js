import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { setSong } from '../../redux/actions/uiAction.js'
import { addRecentItem, addLastItem } from '../../redux/actions/userActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


// ----- CONSTANTS ----- //
const _light = '#dedede',
      _grey = '#aaaaaa',
      _blue = '#1dcce3',
      _dark = '#151515';
    


// ----- COMPONENT ----- //
function Result({ videoId, data, song, setSong, addLastItem, addRecentItem }) {

  //         Artist       Image      Name
  const { channelTitle, thumbnails, title,  } = data;

  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
  let shortName = name.length < 65 ? name : name.slice(0, 65).concat('...')
  const newSong = {
    image: thumbnails.high.url,
    title: name,
    artist: channelTitle,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    videoId: videoId,
  }
  let color = song.videoId === videoId ? _blue : _light;
   
  //   fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${GOOGLE_API_KEY}`)

  
  return(
    <View style={ styles.container }>
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 20 }
        activeOpacity={ 0.5 }
        disabled={song.videoId === videoId}
        onPress={() => {
          setSong(newSong)
          addLastItem(newSong)
          addRecentItem(newSong)
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

function mapStateToProps(state) {
  return {
    song: state.app.song,
  };
}

export default connect(mapStateToProps, { setSong, addLastItem, addRecentItem })(Result);



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
    resizeMode: 'cover'
  },
  title: {
    fontSize: 13,
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