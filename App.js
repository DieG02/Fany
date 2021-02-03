import React from 'react'
import { StyleSheet } from 'react-native'
// import Landing from './views/Landing.js'
import Register from './views/Register.js'

export default function App() {
  return (
    <Register/>
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

