import React, { useState } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  // BackHandler,
  // Alert,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faArrowLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import Result from './Result.js'
import Footer from '../Footer'

// ----- CONSTANTS ----- //
const { width, height } = Dimensions.get('window')
const _light = '#eeeeee',
      _dark = '#151515',
      _blue = '#1dcce3';
    


// ----- COMPONENT ----- //
export default function Search() {

  const [value, setValue] = useState('')
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12]

  return(
    <View style={ styles.main }>
      
      <View style={ styles.searchBar }>
        <TouchableHighlight
          style={ styles.icon }
          activeOpacity={ 0.8 }
          onPress={() => console.log('Back to index')}
        >
          <FontAwesomeIcon
            icon={ faArrowLeft }
            size={ 23 }
            color={ _light }
          />
        </TouchableHighlight>
        <TextInput
          style={ styles.input }
          placeholder='Enter name or URL'
          placeholderTextColor={ _light }
          value={ value }
          onChange={({ nativeEvent }) => {
            setValue(nativeEvent.text)
          }}
          onSubmitEditing={() => console.log(value)}
        />
        <TouchableHighlight
          style={ styles.icon }
          activeOpacity={ 0.8 }
          onPress={() => setValue('')}
        >
          <FontAwesomeIcon
            icon={ faTimes }
            size={ 23 }
            color={ _light }
          />
        </TouchableHighlight>
      </View>

      <View style={ styles.container }>
        <Text style={ styles.subtitle }>
          Results
        </Text>
        <ScrollView
          style={ styles.scroll }
          showsVerticalScrollIndicator={ false }
        >
          {arr.map((index) => {
            return(
              <Result key={index}/>
            )
          })}
        </ScrollView>
      </View>
      
      <Footer/>
      <StatusBar
        animated={true}
        backgroundColor={_dark}
        barStyle='light-content'
        showHideTransition='none'
      />
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: _dark,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchBar: {
    backgroundColor: 'rgba(68, 68, 68, 0.6)',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: '10%',
  },
  input: {
    width: '76%',
    textAlign: 'center',
    color: _light,
    fontSize: height > 600 ? 15 : 14,
    fontWeight: 'bold'
  },
  icon: {
    width: '12%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: height > 600 ? 24 : 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scroll: {
    width: '100%',
    maxHeight: height > 600 ? '79%' : '70%',
  },
})