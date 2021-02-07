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
import { 
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
const { width, height } = Dimensions.get('window')
const image = require('../../assets/linkin_park.jpg')


export default function Item({ index, bot }) {


  const props = {
    src: image,
    title: 'Leave Out All The Rest',
    artist: 'Linkin Park',
    // album: 'Minutes to Midnight',
  }

  return(
    <View 
      index={ index }
      style={ [styles.container, { marginBottom: bot || 10 }] }
    >    
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 30 }
        activeOpacity={ 0.6 }
        onPress={() => console.log('Good job')} 
      >
        <Image source={ props.src } style={ styles.image }/>
        <View>
          <Text style={ styles.title }>
            { props.title }
          </Text>
          <Text style={ styles.content }>
            { props.artist }
          </Text>
        </View>
      </TouchableOpacity>

     <TouchableOpacity 
      style={ styles.icon }
     >
      <FontAwesomeIcon 
          icon={ faTimes }
          color='#eee'
          size={ height > 600 ? 23 : 20 }
        />
     </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(29, 204, 227, 0.9)',
  },
  image: {
    height: 49,
    width: 49,
    marginRight: 10,
  },
  dataContainer: {
    flexDirection: 'row', // Better than flexWrap: 'wrap'
    height: '100%',
    width: `${(1 - (50 / (width- 30))) * 100}%`,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    color: '#eee',
    fontSize: height > 600 ? 16 : 14,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  content: {
    color: '#ddd',
    fontSize: height > 600 ? 12 : 11,
    marginBottom: 'auto'
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})