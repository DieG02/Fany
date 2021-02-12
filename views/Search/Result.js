import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons'


// ----- CONSTANTS ----- //
const { width, height } = Dimensions.get('window')
const image = require('../../assets/neffex.jpg')
const _light = '#eeeeee',
      _grey = '#cccccc',
      _dark = '#151515';
    


// ----- COMPONENT ----- //
export default function Result({ }) {

  return(
    <View style={ styles.container }>
      <TouchableOpacity 
        style={ styles.dataContainer }
        delayPressIn={ 20 }
        activeOpacity={ 0.5 }
      >
        <Image
          source={ image }
          style={ styles.image }
        />
        <View style={{ width: '60%', justifyContent: 'space-around' }}>
          <Text style={ styles.title }>Best of me</Text>
          <Text style={ styles.content }>NEFFEX • 3:49</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.icon }
        activeOpacity={ 0.5 }
        onPress={() => console.log('Add to list')}
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
    width: '85%',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  content: {
    color: _grey,
    fontSize: 13,
    marginBottom: 'auto',
  },
  icon: {
    width: '15%',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})