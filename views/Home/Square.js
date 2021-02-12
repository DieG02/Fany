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
    height: song === true ? '75%' : '100%',
    width: '100%', 
  })


  return(
    <View style={ [styles.main, { height: song === true ? 200 : 150 }] }>
      <TouchableOpacity  
        style={ styles.container } 
        delayPressIn={ 50 }
        activeOpacity={ 0.5 }
        onPress={() => console.log("It doesn't work like that")}
        onPressIn={() => setStylers({ height: song === true ? '72%' : '97%', width: '96%' })}
        onPressOut={() => setStylers({ height: song === true ? '75%' : '100%', width: '100%' })}
      >
        <View>
          <Image
            source={ src } 
            style={ [styles.image, stylers] }
          />
          {song === true ?  
            <View style={ styles.content }>
              <Text style={ styles.text }>
                Hola tan bionica como estas
              </Text>    
            </View>
          : 
            null
          }
        </View>
      </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- // 
const styles = StyleSheet.create({
  main: {
    height: 200,
    width: 150, 
    marginRight: 15,
    marginLeft: 15,
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

  }
})