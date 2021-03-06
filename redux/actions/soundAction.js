import {
  LOAD_SOUND,
  LOADING,
  AUTO_PLAY,
} from '../types.js'
import { Audio } from 'expo-av'
import ytdl from 'react-native-ytdl'



// export const loadSound = async (url, dispatch) => {
//   dispatch({ type: LOADING })

//   console.log('Loading Sound');
//   const sound = new Audio.Sound();
//   console.log(sound)
//   const data = await ytdl(url, { quality: 'highestaudio' });
  
//   console.log('Saving on Store');
//   dispatch({
//     type: LOAD_SOUND,
//     sound: sound,
//     data: data,
//   })

//   console.log('Plating Sound')
//   await sound.loadAsync({ uri: data[0].url });
//   await sound.playAsync();
//   dispatch({
//     type: AUTO_PLAY,
//   })

// }




export const load = async (url, dispatch) => {

  const data = await ytdl(url, { quality: 'highestaudio' });
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync({
    uri: data[0].url
  }, { shouldPlay: true });
 
  dispatch({
    type: LOAD_SOUND,
    sound: sound,
    data: data,
  })
}


export const loadSound = async (url, dispatch) => {

  const data = await ytdl(url, { quality: 'highestaudio' })

  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync({
    uri: data[0].url
  }, { shouldPlay: true });
  
  return dispatch({
    type: LOAD_SOUND,
    sound: sound,
  })
} 



export async function playSound(sound) {
  await sound.playAsync();
}

export async function pauseSound(sound) {
  await sound.pauseAsync();
}


export async function isLooping(value, sound) {
  console.log('isLooping: ', value);
  await sound.setIsLoopingAsync(value);
}




    
