// import React, { useState, useCallback, useRef } from 'react';
// import { 
//   View,
//   WebVie,
// } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';

// export default function Snippet() {
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === 'ended') {
//       setPlaying(false);
//       Alert.alert('video has finished playing!');
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//         <WebView
//             style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
//             javaScriptEnabled={true}
//             domStorageEnabled={true}
//             source={{uri: 'https://www.youtube.com/embed/LYU-8IFcDPw' }}
//         />
//     </View>
//   );
// }