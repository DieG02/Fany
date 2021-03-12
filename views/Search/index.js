import React, { useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../redux/actions/uiAction.js'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Item from './Item.js'


// ----- CONSTANTS ----- // 
const { height } = Dimensions.get('window')
const _light = '#eeeeee';
const colorsGradient = ['#404040', '#343434','#111111', '#000000'],
      locationsGradient = [0.05, 0.15, 0.3, 0.5];


// ----- COMPONENT ----- //
export default function Main({ navigation }) {

  const arr = [1,2,3,4,5,6,7,8,9,10]
  const song = true;
  const sound = useSelector(state => state.audio.sound);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMenu('Search'));
  }, [])


  return(
    <View style={ styles.main }>

      <LinearGradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={ styles.background }
      />
      <StatusBar 
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />

      <View style={ styles.container }>
        <Text style={ styles.title }>Search</Text>   

        <TouchableOpacity
          style={ styles.button }
          activeOpacity={ 1 }
          onPress={() => {
            navigation.navigate('SearchBar')
          }}
        >
          <FontAwesomeIcon 
            icon={ faSearch } 
            color='#666'
            size={ 17 }
            style={ styles.icon }
          />
          <Text style={ styles.content }>Enter name or URL</Text>
        </TouchableOpacity>

        <Text style={ styles.subtitle }>
          Lasts
        </Text>

        <ScrollView showsVerticalScrollIndicator={ false } style={{ maxWidth: '100%' }}>  
          <View style={{ width: '100%', marginTop: '5%', marginBottom: Object.entries(sound).length ? '33 %' : 50 }}>
            {arr.map(index => <Item key={ index }/> )}
          </View>    
        </ScrollView>
      </View>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: _light,
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: height > 720 ? '20%' : '10%',
    marginBottom: height > 720 ? '8%' : '5%',
  },
  button: {
    backgroundColor: _light,
    height: 44,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: '8%',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: -5,
  },
  content: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 15,
    marginRight: 'auto', 
  },
  subtitle: {
    color: _light,
    fontSize: height > 720 ? 24 : 20,
    fontWeight: 'bold',
  },
})