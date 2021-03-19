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
    height: song ? '75%' : '100%',
    width: '100%', 
  })

  // let shortName = song.title.length < 20 ? song.title : song.title.slice(0, 20)

  return(
    <View style={ [styles.main, { height: song ? 200 : 150 }] }>
      <TouchableOpacity  
        style={ styles.container } 
        delayPressIn={ 50 }
        activeOpacity={ 0.5 }
        onPress={() => console.log("It doesn't work like that")}
        onPressIn={() => setStylers({ height: song ? '72%' : '97%', width: '96%' })}
        onPressOut={() => setStylers({ height: song ? '75%' : '100%', width: '100%' })}
      >
        <View>
          <Image
            source={ song ? { uri: song.image } : src} 
            style={ [styles.image, stylers] }
          />
          {song &&  
            <View style={ styles.content }>
              <Text style={ styles.text }>
                { song.title || 'Saved / Searched / Playlist'}
              </Text>    
            </View>
          }
        </View>
      </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- // 
const styles = StyleSheet.create({
  main: {
    width: 150, 
    marginRight: 10,
    marginLeft: 10,
    // backgroundColor: '#1dcce3',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 15,
  },
  touch: {
    height: '100%',
    width: '100%',
  },
  content: {    
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    paddingRight: '2%',
    paddingLeft: '2%',
},
  text: {
    color: '#eee',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 13,
    height: '69%',
  }
})