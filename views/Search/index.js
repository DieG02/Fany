import React from 'react'
import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';

import Item from './Item.js'
import { WHITE, LIGHT } from './searchStyles'


// ----- CONSTANTS ----- // 
const { height } = Dimensions.get('window')

const colorsGradient = ['#404040', '#343434','#111111', '#000000'],
      locationsGradient = [0.05, 0.15, 0.3, 0.5];


// ----- COMPONENT ----- //
function Main({ navigation, sound, lasts }) {
  
  const FocusAwareStatusBar =  (props) => {
    const isFocused = navigation.isFocused();
    isFocused && Keyboard.dismiss();
    return isFocused && <StatusBar {...props} />
  }

  return(
    <View style={ styles.main }>

      <LinearGradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={ styles.background }
      />
      <FocusAwareStatusBar 
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={ styles.title }>Search</Text>   

        <TouchableOpacity
          style={ styles.button }
          activeOpacity={ 1 }
          onPress={() => {
            navigation.navigate('SearchBar')
          }}
        >
          <AntDesign name="search1" size={19} color='#444' style={ styles.icon } />
          <Text style={ styles.content }>Enter name or URL</Text>
        </TouchableOpacity>

        <Text style={ styles.subtitle }>
          History
        </Text>

        <ScrollView showsVerticalScrollIndicator={ false } style={{ maxWidth: '100%' }}>  
          <View style={{ width: '100%', marginTop: '3%', marginBottom: Object.entries(sound).length ? '33 %' : 50 }}>
            {lasts.length > 0 
            ? lasts.map(song => (
                <Item 
                  key={ song.videoId } 
                  item={ song }      
                />
              ))
            : <Text style={ styles.alternativeText }>You don't have recently searchs!</Text>}
          </View>    
        </ScrollView>
      </View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    sound: state.audio.sound,
    lasts: state.user.lasts,
  };
}

export default connect(mapStateToProps, null)(Main);



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

  title: {
    color: WHITE,
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: height > 720 ? '17%' : '10%',
    marginBottom: height > 720 ? '8%' : '5%',
  },
  button: {
    backgroundColor: LIGHT,
    height: 38,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 15,
    marginRight: 'auto', 
  },
  subtitle: {
    color: LIGHT,
    fontSize: height > 720 ? 20 : 18,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  alternativeText: {
    color: LIGHT,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '5%',
  },
})