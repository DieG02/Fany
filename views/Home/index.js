import React, { useEffect } from 'react'
import {
  StyleSheet,
  Dimensions,
  View, 
  Text,
  ScrollView,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import { setMenu } from '../../redux/actions/uiAction.js'
import { LinearGradient } from 'expo-linear-gradient'
import { useIsFocused } from '@react-navigation/native'

import Circle from './Circle.js'
import Square from './Square.js'
import SvgHome from '../svg/homeFrame.js'


// ----- CONSTANTS ----- // 
// const artist = require('../../assets/sum_41.jpg') 
const artist = require('../../assets/grey2.jpg') 

const { height } = Dimensions.get('window')
const _light = '#eeeeee',
      _dark = '#151515';
const colorsGradient = ['#090909','#242424', '#3A3A3A', '#626262'],
      locationsGradient = [0.3, 0.5, 0.7, 0.9];


// ----- COMPONENT ----- // 
function Home({ sound, lasts, setMenu }) {

  const arr = [1,2,3,4,5,6,7]

  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused && <StatusBar {...props} />;
  }


  useEffect(() => {
    setMenu('Home')
  }, [])

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

      <ScrollView 
        style={ styles.container } 
        showsVerticalScrollIndicator={ false }
        onScroll={({ nativeEvent }) => nativeEvent.contentOffset.y}
      >
        <View style={ styles.header }>
        <SvgHome style={{ right: '8%' }} height={ 120 }/>
          <Text style={ styles.title }>Home</Text>
        </View>

        <View style={ styles.artist }>
          <Text style={ styles.subtittles }>My favourite artists</Text>
          <ScrollView 
            style={ styles.circleScroll } 
            horizontal 
            showsHorizontalScrollIndicator={ false }
          >  
          <View style={{ height: 100, width: '100%', flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
            {arr.map(item => <Circle src={ artist } key={ item }/> )}
          </View>
          </ScrollView>
        </View>

        <View style={ styles.recent }>
          <Text style={ styles.subtittles }>Recents</Text>
          <ScrollView 
            style={ styles.squareScroll } 
            horizontal 
            showsHorizontalScrollIndicator={ false }
          >
            <View style={{ height: 200, width: '100%', flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
              {lasts.map((song, index) =>  <Square key={ index } song={ song }/> )}
            </View>
          </ScrollView>
        </View>

        <View style={ styles.playlist }>
          <Text style={ styles.subtittles }>My playlists</Text>
          <ScrollView 
            style={ [styles.squareScroll, { marginBottom: Object.entries(sound).length ? '45 %' : 100 }] } 
            horizontal showsHorizontalScrollIndicator={ false }
          >
            <View style={{ height: 150, width: '100%', flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
              {arr.map(item => <Square src={ artist } key={ item }/> )}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    sound: state.audio.sound,
    lasts: state.user.lasts,
  };
}

export default connect(mapStateToProps, { setMenu })(Home);




// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  
  container: {
    width: '100%',
    height: '73%',
  },

  header: {
    height: '17%',
    width: '100%',
  },
  title: {
    color: _light,
    fontSize: height > 720 ? 40 : 35,
    fontWeight: 'bold',
    marginLeft: 15,
    position: 'absolute',
    top: '21%', 
  },

  subtittles: {
    color: _light,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginBottom: 10,
  },
  circleScroll: {
    marginBottom: '10%',
  },
  squareScroll: {
    maxHeight: 200,
    marginBottom: '10%',
  },
})