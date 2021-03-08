import React from 'react'
import { StyleSheet, Dimensions ,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Landing from './views/Landing.js'
import Register from './views/Register.js'
import Login from './views/Login.js'
import Home from './views/Home'
import Search from './views/Search'
import SearchBar from './views/Search/Search.js'
import Song from './views/Song'


import Footer from './views/Footer'
// import Youtube from './views/Youtube.js'
// import YoutubeExample from './views/YoutubeReact.js'
// import Example from './views/example.js'


const { height, width } = Dimensions.get('window');

function MyTabBar () {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      tabBar={(props) => <Footer {...props}/>}
    >
      <Tab.Screen name='Home' component={ Home } />
      <Tab.Screen name='Search' component={ Search } />
      <Tab.Screen name='SearchBar' component={ SearchBar } />
      
      
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <View style={ styles.container }>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false
        }}
      >    
        <Stack.Screen name='Landing' component={ Landing } />
        <Stack.Screen name='Login' component={ Login } />
        <Stack.Screen name='Register' component={ Register } />
        <Stack.Screen name='MyTabBar' component={ MyTabBar }/>
        
        <Stack.Screen name='Song' component={ Song } />
      </Stack.Navigator>
    </View>
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
