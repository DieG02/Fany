import React, { useState, useEffect, useRef } from 'react'
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
import { useIsFocused } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

import Result from './Result'
import Times from '../svg/times'
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
    max: '&maxResults=10',
    order: '&order=viewCount',
    next: '',
  })

  const [loaded, setLoaded] = useState(false);

  const search = () => {
    const { base, query, key, max, order } = request;
    const req = `${base}&q=${query}${key}${max}${order}`;
    setTimeout(() => {
      fetch(req)
        .then(res => res.json())
        .then((data) => {
          setData(data);
          setResults(data.items);
          setRequest({ ...request, next: data.nextPageToken })
        })
    }, 2000)
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

  const inputRef = useRef();
  const textInputAction = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    const bluringInputs = Keyboard.addListener('keyboardDidHide', () => Keyboard.dismiss());
    return () => bluringInputs.remove();
  }, [])

  loadFontsAsync(setLoaded)
  if (!loaded) return null;


  return(
    <View style={ styles.main }>  
    
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
       />
        <View style={ styles.searchBar }>
          <TouchableOpacity
            style={ styles.icon }
            activeOpacity={0.1}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-small-left" size={25} color={LIGHT} />
          </TouchableOpacity>
          <TextInput
            autoFocus
            ref={inputRef}
            value={value}
            style={ styles.input }
            placeholder='Enter name or URL'
            placeholderTextColor={GREY}
            onChangeText={handleOnChange}
            onSubmitEditing={search}  // --> Add another search button 
          />
          <TouchableOpacity
            style={ styles.icon }
            activeOpacity={0.1}
            onPress={() => {
              handleOnChange('');
              textInputAction()
            }}
          >
            <Times width='20' height='20' color={LIGHT} />
          </TouchableOpacity>
        </View>
        {results && results.length
        ? <FlatList
            style={{ padding: 15 }}
            contentContainerStyle={{ paddingBottom: 15 }}
            data={results}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={handleOnInfinityScroll}
            onEndReachedThreshold={0.5}
          />
        : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Text style={styles.alternativeText}>No results found :(</Text>
          </View> 
        }
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    backgroundColor: '#000',
    width: '100%',
    height: '90%',
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#303030',
    width: '100%',
    height: 50 + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
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