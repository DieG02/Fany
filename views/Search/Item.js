import React from 'react'
import {
  View,
  Image, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { setSong } from '../../redux/actions/uiAction.js'
import { removeLastItem } from '../../redux/actions/userActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



// ----- CONSTANTS ----- //
const { width } = Dimensions.get('window')
const _light = '#eeeeee',
      _blue = '#1dcce3';
    


// ----- COMPONENT ----- //
function Item({ item, song, setSong, removeLastItem }) {

  const { image, title, artist, videoId } = item
  let color = song.videoId === videoId ? _blue : _light;
   

  return(
    <View 
      style={ styles.container }
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
      <FontAwesomeIcon 
        icon={ faTimes }
        color='#aaa'
        size={ 22 }
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
    width: `${(1 - (45 / width)) * 100}%`,
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