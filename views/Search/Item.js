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
const image = require('../../assets/linkin_park.jpg')


// ----- COMPONENT ----- //
export default function Item({}) {


  const props = {
    src: image,
    title: 'Leave Out All The Rest',
    artist: 'Linkin Park'
  }

  return(
    <View 
      style={ styles.container }
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
        color='#aaa'
        size={ height > 600 ? 23 : 20 }
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
    marginRight: 15,
  },
  dataContainer: {
    flexDirection: 'row',
    height: '100%',
    width: `${(1 - (50 / (width- 30))) * 100}%`,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    color: '#aaa',
    fontSize: 12,
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