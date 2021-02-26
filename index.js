import React, { useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Landing from './views/Landing.js'
import Register from './views/Register.js'
import Login from './views/Login.js'
import Home from './views/Home'
import Search from './views/Search'
import SearchBar from './views/Search/Search.js'
import Song from './views/Song/index.js'

// import { useSelector } from 'react-redux';
import { connect } from 'react-redux'
import { showMenu } from './redux/actions/uiAction.js'
 

 import Footer from './views/Footer'
// import Youtube from './views/Youtube.js'
// import YoutubeExample from './views/YoutubeReact.js'
// import Audio from './views/Audio.js'


const { height, width } = Dimensions.get('window');


export function Root({ showMenu, ui}) {

  useEffect(() => {
    showMenu(true);
    console.log(ui)
  })
  
  // const ui = useSelector(state => state.ui)
  // console.log(ui);

  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false
        }}
      >
        <Stack.Screen name='Landing' component={ Landing } />
        <Stack.Screen name='Login' component={ Login } />
        <Stack.Screen name='Register' component={ Register } />
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Search' component={ Search } />
        <Stack.Screen name='SearchBar' component={ SearchBar } />
        <Stack.Screen name='Song' component={ Song } />
      </Stack.Navigator>
      { ui.showMenu
        ? <Footer />
        : null
      }
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: height,
    width: width,
    zIndex: 3,
  }
});



function MapStateToProps(state){
  return {
      ui : state.app.ui
  }
}

export default connect(MapStateToProps,{ showMenu })(Root);