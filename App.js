import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Landing from './views/Landing.js'
import Register from './views/Register.js'
import Home from './views/Home'
import Footer from './views/Footer'
import Search from './views/Search'
import SearchBar from './views/Search/Search.js'
import Song from './views/Song/index.js'
import Youtube from './views/Youtube.js'
import YoutubeExample from './views/YoutubeReact.js'
import Snippet from './views/Snippet.js'
import Audio from './views/Audio.js'

const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={ styles.container }>
      <Audio />
    </View>
  );
}

const styles = StyleSheet.create({
  //Don't care by the moment
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: height,
    width: width,
  }
});

