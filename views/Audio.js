// import { Audio } from 'expo-av'
// import ytdl from 'react-native-ytdl'


// const [sound, setSound] = useState();
// const [value, setValue] = useState();
// const [status, setStatus] = useState({
//   isPlaying: false,
//   isLooping: false,
//   value: 0,
// })
// const [slider, setSlider] = useState(0)


// export function load(url,) {
//   async function loadSound() {
//     console.log('Loading Sound');
//     const sound = new Audio.Sound();
//     setSound(sound);
//     const data = await ytdl(url, { quality: 'highestaudio' });
//     await sound.loadAsync({ uri: data[0].url });
//     await sound.playAsync();
//   }
//   loadSound();
// }


// export async function isLooping(value) {
//   await sound.setIsLoopingAsync(value)
// }

// export async function setTiming() {
//   const { durationMillis } = await sound.getStatusAsync();
//   await sound.setPositionAsync(durationMillis * value)
// }






// { sound 
//   ? setTimeout(
//     async () => {
//       const { positionMillis, durationMillis } = await sound.getStatusAsync();
//       // console.log('Segundos : ', Math.floor(positionMillis / 1000))
//       setSlider(positionMillis / durationMillis)
//     } , 1000)
//   : null
// }



// useEffect(() => {
//   load()
// }, [])

// useEffect(() => {
//   return sound
//   ? sound.unloadAsync()
//   : null;
// }, [sound]);

