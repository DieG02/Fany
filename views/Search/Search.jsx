import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  Keyboard,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../redux/actions/uiAction.js'
import { useIsFocused } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faArrowLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import Result from './Result.js'
import { 
  loadFontsAsync,
  WHITE,
  LIGHT,
  GREY,
  DARK,
} from '../MainStyles'


const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

// ----- CONSTANTS ----- //
const { height, width } = Dimensions.get('window')
const _light = '#eeeeee',
      _grey = '#cccccc',
      _dark = '#151515';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}


// ----- COMPONENT ----- //
export default function Search({ navigation }) {

  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const sound = useSelector(state => state.audio.sound);
  let input =  value.replace(/\s+/g, '%20') 
  const dispatch = useDispatch()

  const search = function(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then((data) => {
      setData(data)
    })
  }

  useEffect(() => {
    dispatch(showMenu(true))
    const bluringInputs = Keyboard.addListener('keyboardDidHide', () => Keyboard.dismiss());
    return () => bluringInputs.remove();
  }, [])

  loadFontsAsync(setLoaded)
  if (!loaded) return null;


  return(
    <View style={ styles.main }>  
    
      <FocusAwareStatusBar
        translucent={false}
        backgroundColor='#303030'
        barStyle='light-content'
       />

      <View style={ styles.searchBar }>
        <TouchableHighlight
          style={ styles.icon }
          activeOpacity={ 0.8 }
          onPress={() => {
            navigation.goBack()
          }}
        >
          <FontAwesomeIcon
            icon={ faArrowLeft }
            size={ 23 }
            color={ _light }
          />
        </TouchableHighlight>
        <TextInput
          autoFocus
          style={ styles.input }
          placeholder='Enter name or URL'
          placeholderTextColor={GREY}
          value={ value }
          onChangeText={(val) => setValue(val)}
          onSubmitEditing={() => {
            search();
          }}  // --> Add another search button 
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
        
        <View style={{ height: '100%', marginTop: '5%' }}>
          <ScrollView
            style={ styles.scroll }
            showsVerticalScrollIndicator={ false }
          >
            <View style={{ marginBottom: Object.entries(sound).length ? '23 %' : 10 }}>
              {data.items 
              ? data.items.map((item, index) => {
                return (
                  <Result 
                    key={ index } 
                    videoId={ item.id.videoId }
                    data={ item.snippet }           
                  />
                )
              })
              : <Text style={ styles.alternativeText }>Your search results will appear here!</Text>}
            </View>           
          </ScrollView>
        </View>
      </View>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,  
    alignItems: 'flex-start',
    backgroundColor: _dark,
    width: width,
    height: height,
  },
  searchBar: {
    backgroundColor: '#303030',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    height: '88%', 
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    width: '76%',
    color: _light,
    fontSize: 14,
    fontFamily: 'Poppins',
    marginTop: 5,
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
    fontSize: 22,
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
    marginTop: '5%',
  }
})