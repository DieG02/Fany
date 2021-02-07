import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faSearch,
  faPlus, // --> +
} from '@fortawesome/free-solid-svg-icons'
import Item from './Item.js'
import Footer from '../Footer/'
const { width, height } = Dimensions.get('window')


export default function Search() {

  const arr = [1,2,3,4,5,6,7,8,9,10]


  return(
    <View style={ styles.main }>
      <View style={ styles.container }>
        <Text style={ styles.title }>
          Search
        </Text>   

        <TouchableOpacity
          style={ styles.button }
          activeOpacity={ 0.8 }
        >
          <FontAwesomeIcon 
            icon={ faSearch } 
            color='#666'
            size={ height > 600 ? 18 : 16 }
            style={ styles.icon }
          />
          <Text style={ styles.content }>
            Enter name or URL
          </Text>
        </TouchableOpacity>

        <Text style={ styles.subtitle }>
          Lasts
        </Text>

        <ScrollView showsVerticalScrollIndicator={ false } style={ styles.scroll }>      
          {arr.map(index => {
            let bot;
            if(arr.indexOf(index) === arr.length - 1) bot = '40%';
            return(
              <Item index={ index } bot={ bot }/>
            )
          })}
        </ScrollView>
      </View>

      <Footer/>
      <StatusBar style='inverted'/>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#111'
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: '#fff',
    fontSize: height > 600 ? 40 : 38,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: height > 600 ? '20%' : '15%',
    marginBottom: height > 600 ? '10%' : '5%',
  },
  button: {
    backgroundColor: '#fff',
    height: height > 600 ? 44 : 40,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 5,
    flexDirection: 'row',
    marginBottom: '10%',
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: -5,
  },
  content: {
    fontSize: height > 600 ? 18 : 16,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 15,
    marginTop: 'auto',
    marginRight: 'auto', 
    marginBottom: 'auto',
  },
  subtitle: {
    color: '#fff',
    fontSize: height > 600 ? 24 : 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scroll: {
    maxWidth: '100%',
    height: '100%',
  }
})