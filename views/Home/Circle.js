import React from 'react'
import {
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'


export default function Circle({ src }) {
  return(
    <View style={ styles.main }>
      <ImageBackground 
        source={ src } 
        style={ styles.container } 
        imageStyle={{ borderRadius: 50 }}
      >
        <TouchableHighlight  
          style={ styles.image } 
          delayPressIn={ 20 }
          underlayColor='rgba(75, 75, 75, 0.5)'
          onPress={() => console.log("It doesn't work like that")}
        >
          <View/>
        </TouchableHighlight>
      </ImageBackground> 
    </View>
  )
}


// ----- STYLERS ----- // 
const styles = StyleSheet.create({
  main: {
    height: 70,
    width: 70, 
    marginRight: 15,
    marginLeft: 15,
  },
  container: {
    height: 70,
    width: 70,  
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 35,
  }
})