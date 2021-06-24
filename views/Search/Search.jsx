import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../redux/actions/uiAction'
import { useIsFocused } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import Result from './Result'
import { 
  loadFontsAsync,
  WHITE,
  LIGHT,
  GREY,
  DARK,
} from '../MainStyles'


const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

// Custom components
const FocusAwareStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused && <StatusBar {...props} />
}
const renderItem = ({ item: {id, snippet} = {} }) => {
  // Equivalent to --> const { id, snippet } = item
  return <Result videoId={id.videoId} data={snippet} />
};


// Main component
export default function Search({ navigation }) {

  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const [request, setRequest] = useState({
    base: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet',
    query: '',
    key: `&key=${GOOGLE_API_KEY}`,
    max: '&maxResults=2',
    order: '&order=viewCount',
    next: '',
  })

  const [loaded, setLoaded] = useState(false);
  const sound = useSelector(state => state.audio.sound);
  const dispatch = useDispatch()

  const search = function(){
    const { base, query, key, max, order } = request;
    const req = `${base}&q=${query}${key}${max}${order}`;
    console.log(req);
    fetch(req)
      .then(res => res.json())
      .then((data) => {
        setData(data);
        console.log(data.items)
        // setResults([data.items]);
        setRequest({ ...request, next: data.nextPageToken })
      })
  }

  const handleOnChange = (string) => {
    setValue(string)
    setRequest({ ...request, query: string.replace(/\s+/g, '%20') })
  }

  const handleOnInfinityScroll = () => {
    const { base, query, key, max, order, next } = request;
    fetch(`${base}&q=${query}${key}${max}${order}&pageToken=${next}`)
      .then(res => res.json())
      .then((data) => {
        setData(data);
        setResults([...results, ...data.items]);
        setRequest({ ...request, next: data.nextPageToken })
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
        <TouchableOpacity
          style={ styles.icon }
          activeOpacity={0.1}
          onPress={() => navigation.goBack()}
        >
          <Entypo name='chevron-left' size={25} color={LIGHT} />
        </TouchableOpacity>
        <TextInput
          autoFocus
          value={value}
          style={ styles.input }
          placeholder='Enter name or URL'
          placeholderTextColor={GREY}
          onChangeText={handleOnChange}
          onSubmitEditing={() => search()}  // --> Add another search button 
        />
        <TouchableOpacity
          style={ styles.icon }
          activeOpacity={0.1}
          onPress={() => handleOnChange('')}
        >
          <Entypo name='cross' size={25} color={LIGHT} />
        </TouchableOpacity>
      </View>
      {results && results.length
      ? <FlatList
          style={{ padding: 15 }}
          contentContainerStyle={{ paddingBottom: 15 }}
          data={results}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          // onEndReached={() => handleOnInfinityScroll()}
          onEndReachedThreshold={0.3}
        />
      : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Text style={styles.alternativeText}>No results found :(</Text>
        </View> 
      }
      <TouchableOpacity onPress={() => handleOnInfinityScroll()}><Text style={{ color: "#FFF"}}>Press me for more results</Text></TouchableOpacity>

    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    backgroundColor: DARK,
    width: '100%',
    height: '100%',
  },
  searchBar: {
    backgroundColor: '#303030',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '78%',
    color: WHITE,
    fontSize: 14,
    fontFamily: 'Poppins',
    paddingTop: 3,
    paddingLeft: 3,
  },
  icon: {
    width: '11%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alternativeText: {
    color: GREY,
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  }
})