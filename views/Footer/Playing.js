import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity // TouchableHighlight --> Show us a border / dark background
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons'

const { width, height } = Dimensions.get('window')



export default function Playing({ props, isToggleOn, setToggle }) {
  
  return(
    <View style={ styles.play }>
      <Image 
        source={ props.src }
        style={ styles.image }
      />
      <Text style={ styles.title }>
        { props.title }
      </Text>
      <Text style={ styles.content }>
        { props.artist } • { props.album }
      </Text>
      
      <View style={{ width: 45, height: '100%' }}> 
        <TouchableOpacity
          onPress={() => {
            setToggle({
              ...isToggleOn,
              favourite: !isToggleOn.favourite
            })
            isToggleOn.favourite !== true ?
              alert('Add to Favourites')
            :
              alert('Remove from Favourites')

          }}
          style={{height: '100%'}}
        >
          <FontAwesomeIcon 
            icon={ isToggleOn.favourite ? faHeartFill : faHeart }  
            color={ isToggleOn.favourite ? '#1dcce3' : '#999'} 
            size={ height > 600 ? 23 : 21 }
            style={ [styles.itemBox, styles.icons] }
          />
        </TouchableOpacity>
      </View>    

      <View style={{ width: 45, height: '100%' }}>
        <TouchableOpacity
          onPress={() => {
            setToggle({
              ...isToggleOn,
              play: !isToggleOn.play
            })
            alert('Do something')
          }}
          style={{ height: '100%' }}
        >
          <FontAwesomeIcon 
            icon={ isToggleOn.play ? faPause : faPlay }
            color='#fff'
            size={ height > 600 ? 23 : 21 }
            style={ [styles.itemBox, styles.icons] }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  play: {
    flexWrap: 'wrap',
    height: height > 600 ? 74 : 64,
    width: width,
    backgroundColor: '#222',
  },
  image: {
    width:  height > 600 ? 74 : 64,
    height:  height > 600 ? 74 : 64,
  },
  title: {
    width: '50%',
    color: '#fff',
    fontSize:  height > 600 ? 14 : 13,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 15,
    marginTop: 'auto',
  },
  content: {
    width: '50%',
    color: '#ccc',  
    fontSize:  height > 600 ? 13 : 12,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 'auto',
  },
  icons: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
})