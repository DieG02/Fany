import React from 'react'
import { StyleSheet, View } from 'react-native'
// import Landing from './views/Landing.js'
// import Register from './views/Register.js'
// import Home from './views/Home.js'
// import Footer from './views/Footer'
import Search from './views/Search'


export default function App() {
  return (
    <Search/>
  );
}

const styles = StyleSheet.create({
  //Don't care by the moment
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

