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
    <View style={ styles.container }>
      <Image 
        source={ props.src }
        style={ styles.image }
      />

      <View style={ styles.dataContainer }>
        <Text style={ styles.title }>
          { props.title }
        </Text>
        <Text style={ styles.content }>
          { props.artist } • { props.album }
        </Text>
      </View>

      <View style={ styles.itemBox }> 
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
            size={ 23 }
            style={ [styles.itemBox, styles.icons] }
          />
        </TouchableOpacity>
      </View>    

      <View style={ styles.itemBox }>
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
            size={ 23 }
            style={ styles.icons }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 74,
    width: '100%',
    backgroundColor: '#222',
    marginBottom: 1,
  },
  image: {
    width:  74,
    height:  74,
  },
  dataContainer: {
    width: '58%',
    height: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  title: {
    width: '100%',
    color: '#fff',
    fontSize:  height > 725 ? 14 : 13,
    fontWeight: 'bold',
    marginRight: 15,
    marginTop: 'auto',
  },
  content: {
    width: '100%',
    color: '#ccc',  
    fontSize:  height > 725 ? 13 : 12,
    marginRight: 15,
    marginBottom: 'auto',
  },
  itemBox: {
    flex: 1, 
  },
  icons: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
})