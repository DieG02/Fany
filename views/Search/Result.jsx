import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { setSong } from '../../redux/actions/song'
import { addRecentItem, addLastItem } from '../../redux/actions/user'
import { AntDesign } from '@expo/vector-icons'

import {
  loadFontsAsync,
  WHITE,
  LIGHT,
  MAIN,
  GREY,
  DARK,
} from '../MainStyles'


// ----- COMPONENT ----- //
function Result({ videoId, data, song, setSong, addLastItem, addRecentItem }) {

  const [loaded, setLoaded] = useState(false)
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
  let color = song.videoId === videoId ? MAIN : LIGHT;
   
  //   fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${GOOGLE_API_KEY}`)

  loadFontsAsync(setLoaded)
  if (!loaded) return null;

  return(
    <View style={ styles.container }>
      <TouchableOpacity 
        style={ styles.data }
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
        <View style={{ width: '80%', height: '100%', justifyContent: 'space-around' }}>
          <Text style={[styles.title, { color: color }]}>{ shortName }</Text>
          <Text style={ styles.content }>{ channelTitle }</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.icon }
        activeOpacity={0.2}
        onPress={() => console.log('Add to playlist')}
      >
        <AntDesign name="plus" size={20} color={GREY} />
      </TouchableOpacity>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    song: state.audio.song,
  };
}

export default connect(mapStateToProps, { setSong, addLastItem, addRecentItem })(Result);



// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    backgroundColor: DARK,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 15,
  },
  data: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 'auto',
    width: '100%',
  },
  content: {
    color: GREY,
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