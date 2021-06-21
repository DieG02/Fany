import React from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'


export default function Favourites() { 
  return (
    <View style={styles.container}>
      <Text>FAVOURITES SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})