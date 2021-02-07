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
// import LinearGradient from 'react-native-linear-gradient'
import {  StatusBar } from 'expo-status-bar'
import SvgHome from './svg/homeFrame.js'
const artist = require('../assets/sum_41.jpg') 

const { height, width } = Dimensions.get('window')
console.log(height, width)
export default function Home() {
  return( 
    <View style={styles.container}>
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


      <StatusBar style='inverted'/>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#333',
    paddingLeft: 15,
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