import React from 'react'
import {
  StyleSheet,
  Dimensions,
  View, 
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import Footer from './Footer'
import SvgHome from './svg/homeFrame.js'

// ----- CONSTANTS ----- // 
const artist = require('../assets/sum_41.jpg') 
const { height, width } = Dimensions.get('window')
const _light = '#eeeeee',
      _grey = '#dddddd',
      _dark = '#151515',
      _blue = '#1dcce3';
const colorsGradient = ['#111111','#242424', '#3A3A3A', '#626262'],
      locationsGradient = [0.3, 0.5 ,0.7, 0.9];


// ----- COMPONENT ----- // 
export default function Home() {

  return( 
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={styles.background}
      />

      <SvgHome style={styles.frame} height={height > 600 ? 125 : 95}/>
      <Text style={styles.title}>Home</Text>


      <Text style={styles.subtittles}>My favourite artists</Text>
      <ScrollView style={styles.circleScroll} horizontal showsHorizontalScrollIndicator={false}>

        <TouchableHighlight  style={styles.circleImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.circleImage}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.circleImage}>
          <Text>BOX2</Text>
        </TouchableHighlight> 
        
        <TouchableHighlight style={styles.circleImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.circleImage}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.circleImage}>
          <Text>BOX4</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.circleImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.circleImage}/>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circleImage, { marginRight: 30}]}>
          <Text>BOX6</Text>
        </TouchableHighlight>
      </ScrollView>



      <Text style={[styles.subtittles, { marginTop: 30 }]}>Recents</Text>
      <ScrollView style={styles.squareScroll} horizontal showsHorizontalScrollIndicator={false}>
        <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
      
        <TouchableHighlight style={styles.squareImage}>
          <Text>BOX6</Text>
        </TouchableHighlight>

          <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.squareImage}>
          <Text>BOX6</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
        
        <TouchableHighlight style={[styles.squareImage, { marginRight: 30}]}>
          <Text>BOX6</Text>
        </TouchableHighlight>
      </ScrollView>



      <Text style={[styles.subtittles, { marginTop: 30 }]}>My playlists</Text>
      <ScrollView style={styles.squareScroll} horizontal showsHorizontalScrollIndicator={false}>
        <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
      
        <TouchableHighlight style={styles.squareImage}>
          <Text>BOX6</Text>
        </TouchableHighlight>

          <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.squareImage}>
          <Text>BOX6</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.squareImage} onPress={() => console.log("It doesn't work like that")}>
          <Image source={artist} style={styles.squareImage}/>
        </TouchableHighlight>
        
        <TouchableHighlight style={[styles.squareImage, { marginRight: 30}]}>
          <Text>BOX6</Text>
        </TouchableHighlight>
      </ScrollView>

      <Footer/>
      <StatusBar style='inverted'/>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#333',
    paddingLeft: 15,
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  frame: {
    right: '15%',
  },
  title: {
    color: '#fff',
    fontSize: height > 600 ? 40 : 32,
    fontWeight: 'bold',
    right: height > 600 ? '0%' : '0%',
    marginTop: height > 600 ? '-24%' : '-20%',
    marginBottom: height > 600 ? '15%' : '12%',
  },
  subtittles: {
    color: '#fff',
    fontSize: height > 600 ? 24 : 19,
    fontWeight: 'bold',
    // right: height > 600 ? '39%' : '46%',
    marginBottom: 10,
  },
  circleScroll: {
    maxHeight: height > 600 ? 85 : 69,
    marginLeft: -15,
    paddingLeft: 15,
  },
  circleImage: {
    width: height > 600 ? 85 : 69,
    height: height > 600 ? 85 : 69,
    marginRight: height > 600 ? 25 : 15,
    borderRadius: 42,
    backgroundColor: '#ddd',
  },
  squareScroll: {
    maxHeight: height > 600 ? 115 : 90,
    marginLeft: -15,
    paddingLeft: 15,
  },
  squareImage: {
    width: height > 600 ? 115 : 90,
    height: height > 600 ? 115 : 90,
    marginRight: height > 600 ? 25 : 15,
    backgroundColor: '#ddd',
  },
})