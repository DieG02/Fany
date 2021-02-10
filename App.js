import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
// import Landing from './views/Landing.js'
// import Register from './views/Register.js'
// import Home from './views/Home.js'
// import Footer from './views/Footer'
// import Search from './views/Search'
// import SearchBar from './views/Search/Search.js'
import Song from './views/Song/index.js'

const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={ styles.container }>
      <Song/>
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

