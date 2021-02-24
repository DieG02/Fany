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
import { GOOGLE_API_KEY } from '@env'
import Result from './Result.js'
import Footer from '../Footer'


// ----- CONSTANTS ----- //
const { height, width } = Dimensions.get('window')
const _light = '#eeeeee',
_grey = '#cccccc',
_dark = '#151515';

// ----- COMPONENT ----- //
export default function Search() {

  const [value, setValue] = useState('');
  const [data, setData] = useState({});

  let input =  value.replace(/\s+/g, '%20') 

  const search = function(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      setData(data)
    })
  }

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
          onSubmitEditing={() => search()}  // --> Add another search button 
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
        <View style={ styles.subtitleContainer }>
          <Text style={ styles.subtitle }>
            Results
          </Text>
        </View>
        <ScrollView
          style={ styles.scroll }
          showsVerticalScrollIndicator={ false }
        >
          <View style={{ marginTop: '5%', marginBottom: '40%' }}>

          {data.items ? data.items.map(item => {
            // const { urlImage } = item.snippet.thumbnails.high;
            return (
              <Result 
                key={ item.id.videoId } 
                videoId={ item.id.videoId }
                data={ item.snippet }           
              />
            )
          })
          : <Text style={ styles.alternativeText }>Your search results will apear here!</Text>}

          </View>
        </ScrollView>
     </View>

      <StatusBar
    
        backgroundColor={_dark}
        barStyle='light-content'
        showHideTransition='none'
      />
      <Footer />
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,  
    alignItems: 'flex-start',
    backgroundColor: _dark,
    width: '100%',
    height: '100%',
  },
  searchBar: {
    backgroundColor: 'rgba(68, 68, 68, 0.6)',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    height: height - 50, 
  },
  input: {
    width: '76%',
    paddingLeft: 5,

    color: _light,
    fontSize: height > 725 ? 15 : 14,
    fontWeight: 'bold'
  },
  icon: {
    width: '12%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitleContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 10,
    height: '10%',
  },
  subtitle: {
    color: '#fff',
    fontSize: height > 600 ? 24 : 20,
    fontWeight: 'bold',
  },
  scroll: {
    width: '100%',
  },
  alternativeText: {
    color: _grey,
    fontSize: 15,
    fontWeight: 'bold',
    width: width,
  }
})