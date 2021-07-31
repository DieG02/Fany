import React from 'react'
import {
  View,
  Image, 
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

import { setSong } from '../../redux/actions/uiAction'
import { removeLastItem } from '../../redux/actions/userActions'
import Times from '../svg/times'
import { MAIN, LIGHT, GREY_L } from '../MainStyles'


// ----- COMPONENT ----- //
function Item({ item, song, setSong, removeLastItem }) {

  const { image, title, artist, videoId } = item
  let color = song.videoId === videoId ? MAIN : LIGHT;
   

  return(
    <View style={ styles.container }
    >    
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 30 }
        activeOpacity={ 0.6 }
        onPress={() => setSong(item)} 
      >
        <Image source={{ uri: image }} style={ styles.image }/>
        <View style={{ width: '80%', height: '80%' }}>
          <Text style={[ styles.title, { color: color } ]}>
            { title }
          </Text>
          <Text style={ styles.content }>
            { artist }
          </Text>
        </View>
      </TouchableOpacity>

     <TouchableOpacity 
      style={ styles.icon }
      onPress={() => removeLastItem(videoId)}
     >
      <Times width='20' height='20' color={GREY_L}></Times>
      {/* <Entypo name="cross" size={25} color={LIGHT} /> */}
     </TouchableOpacity>
    </View>
  )
}


function mapStateToProps(state) {
  return {
    song: state.audio.song,
  };
}

export default connect(mapStateToProps, { setSong, removeLastItem })(Item);



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
    width: '90%',
    alignItems: 'center',
  },
  title: {
    marginTop: 'auto',
    fontSize: 13,
    width: '100%',
    fontWeight: 'bold',
    height: 18,
  },
  content: {
    color: GREY_L,
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