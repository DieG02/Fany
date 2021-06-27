import React, { useState } from 'react'
import {
  StyleSheet,
  Dimensions,
  View, 
  Text,
  ScrollView,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import { setMenu } from '../../redux/actions/uiAction'
import { LinearGradient } from 'expo-linear-gradient'

import Circle from './Circle'
import Square from './Square'
import SvgHome from '../svg/homeFrame.js'
import { loadFontsAsync, WHITE, LIGHT } from '../MainStyles'


// ----- CONSTANTS ----- // 
const artist = require('../../assets/grey2.jpg') 
const { height } = Dimensions.get('window')
const colorsGradient = ['#444', '#202020','#171717', '#151515', '#000'];
const locationsGradient = [0.00, 0.15, 0.5, 0.8, 0.9];


// ----- COMPONENT ----- // 
function Home({ sound, lasts, navigation }) {
  const [loaded, setLoaded] = useState(false);
  loadFontsAsync(setLoaded)
  const arr = [1,2,3,4,5,6,7]

  function FocusAwareStatusBar(props) {
    return navigation.isFocused && <StatusBar {...props} />;
  }


  if(!loaded) return null;
  return( 
    <View style={{ flex: 1 }}>
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
        <SvgHome style={{ right: '10%', top: '-8%' }} height={ 120 }/>
          <Text style={ styles.title }>Home</Text>
        </View>


        <View style={styles.artist}>
          <Text style={ styles.subtittles }>My favourite artists</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={ false } >  
              {arr.map((_, i) => <Circle src={ artist } key={i}/> )}
            </ScrollView>
          </View>
        </View>


        <View style={ styles.recent }>
          <Text style={ styles.subtittles }>Recents</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={ false } >
              <View style={{ marginHorizontal: 5, flexDirection: 'row' }}>
                {lasts.map((song, i) => <Square key={i} song={ song }/> )}
              </View>
            </ScrollView>
          </View>
        </View>


        <View style={[ styles.playlist, { marginBottom: Object.entries(sound).length ? '45%' : 100 } ]} >
          <Text style={ [styles.subtittles, { marginBottom: 20 }] }>My playlists</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={ false } >
            <View style={{ marginHorizontal: 5, flexDirection: 'row' }}>
              {arr.map((_, i) => <Square src={ artist } key={i}/> )}
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
    color: WHITE,
    fontSize: height > 720 ? 30 : 27,
    fontWeight: 'bold',
    marginLeft: 15,
    position: 'absolute',
    top: '25%', 
  },

  subtittles: {
    color: LIGHT,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
  },

  artist: {
    height: 120, 
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  recent: {
    height: 250, 
    justifyContent: 'space-between',
    marginBottom: '6%',
  },
  playlist: {
    height: 200,
    justifyContent: 'space-between',
  },
})