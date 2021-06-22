import React from 'react'
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
import SvgHome from '../svg/homeFrame'
import { WHITE, LIGHT } from './homeStyles'


// ----- CONSTANTS ----- // 
const artist = require('../../assets/grey2.jpg') 
const { height } = Dimensions.get('window')
const colorsGradient = ["#444", '#202020','#171717', '#151515', '#000'];
const locationsGradient = [0.00, 0.15, 0.5, 0.8, 0.9];


// ----- COMPONENT ----- // 
function Home({ sound, lasts, navigation }) {

  const arr = [1,2,3,4,5,6,7]

  function FocusAwareStatusBar(props) {
    return navigation.isFocused && <StatusBar {...props} />;
  }

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
              <View style={{ marginHorizontal: 5, flexDirection: "row" }}>
                {lasts.map((song, i) => <Square key={i} song={ song }/> )}
              </View>
            </ScrollView>
          </View>
        </View>


        <View style={ styles.playlist }>
          <Text style={ styles.subtittles }>My playlists</Text>
          <ScrollView 
            style={ [styles.squareScroll, { marginBottom: Object.entries(sound).length ? '45 %' : 100 }] } 
            horizontal showsHorizontalScrollIndicator={ false }
          >
            <View style={{ height: 150, width: '100%', flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
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
    // backgroundColor: "#f00", 
    height: 120, 
    justifyContent: "space-between",
    marginBottom: '10%',
  },
  recent: {
    // backgroundColor: "#090", 
    height: 250, 
    justifyContent: "space-between",
    marginBottom: '10%',
  },
  squareScroll: {
    maxHeight: 200,
  },
})