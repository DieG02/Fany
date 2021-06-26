import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import ytdl from 'react-native-ytdl'

export default function Favourites() { 
  const search = async () => {
    const youtubeURL = 'https://www.youtube.com/watch?v=dHtwZ07N1ic';
    const urls = await ytdl(youtubeURL);
    console.log(urls)
  }

  return (
    <View style={styles.container}>
      <Text>FAVOURITES SCREEN</Text>
      <TouchableHighlight onPress={search}>
        <Text>Listen</Text>
      </TouchableHighlight>
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