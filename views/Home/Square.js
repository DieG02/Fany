import React , { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'


// ----- COMPONENT ----- //
export default function Square({ src, song }) {

  const [stylers, setStylers] = useState({ 
    height: 150,
    width: 150, 
  })

  return(
    <View style={ [styles.main, { height: !!song ? 200 : 150 }] }>
      <TouchableOpacity  
        delayPressIn={ 50 }
        activeOpacity={ 0.5 }
        style={{ justifyContent: "space-between", width: "100%", height: "100%" }}
        onPress={() => console.log("It doesn't work like that")}
        onPressIn={() => setStylers({ height: 144, width: 144, marginTop: 3, marginLeft: 3 })}
        onPressOut={() => setStylers({ height: 150, width: 150, margin: 0 })}
      >
          
        <Image
          source={ !!song ? { uri: song.image } : src} 
          style={ [{ borderRadius: 10 }, stylers] }
        />

        {song &&  
          <View style={ styles.content }>
            <Text style={ styles.text }>
              {song.title.slice(0, 70)}
            </Text>    
          </View>
        }
      </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- // 
const styles = StyleSheet.create({
  main: {
    width: 150, 
    marginHorizontal: 10,
  },
  content: {
    height: 50,
    paddingTop: 3,
  },
  text: {
    color: '#AAA',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
  }
})