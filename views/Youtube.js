// import React, { useState } from 'react'
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   StyleSheet,
//   TouchableHighlight,
// } from 'react-native'
// import { StatusBar } from 'expo-status-bar'

// const src =  'https://i.ytimg.com/vi/VMqDSntAbC0/default.jpg'
// // ----- CONFIGURATIONS ----- //
// const API_KEY = 'AIzaSyB0oQg_yzXTiaNox4DZfN2asm7t6boKTbY';

// // ----- COMPONENT ----- //
// export default function Youtube() {

//   const [value, setValue] = useState('');
//   const [data, setData] = useState({});

//   let input =  value.replace(/\s+/g, '%20') 

//   const search = function(){
    
//     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${input}&key=${API_KEY}`)
//     .then(res => res.json())
//     .then(function(data) {
//       setData(data)
//     })
//   }

//   return(
//     <View style={ styles.container }>
//       <View style={ styles.content }>
//         <Text style={{ color: '#fff', marginBottom: 10 }}>{ value || 'Search something' }</Text>
//         <TextInput
//           style={ styles.input }
//           placeholder='Enter name or URL'
//           value={ value }
//           onChange={({ nativeEvent }) => {
//             setValue(nativeEvent.text)
//           }}
//           onSubmitEditing={() => search()}
//         />
//         <TouchableHighlight
//           onPress={() => search()}
//         >
//           <View>
//             <Text>
//               Search
//             </Text>
//           </View>
//         </TouchableHighlight>
        
//         {data.items ? data.items.map(item => {
//           const { height, url, width } = item.snippet.thumbnails.default;
//            return (<Image
//            key={ item.id.videoId }
//             style={{ 
//               width: width,
//               height: height
//             }}
//             source={{
//               uri: url
//             }}
//           />)
//         })
//         : <Text>Data empty</Text>}
     
//       </View>   

//       <StatusBar style='light'/>
//     </View>
//   )
// }



// // ----- STYLERS ---- //
// const styles = StyleSheet.create({
//   container: { 
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#000',
//   },
//   content: {
//     height: '75%',
//     width: '100%',
//     backgroundColor: '#666',
//     marginTop: 'auto',
//     marginBottom: 'auto',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: '90%',
//     height: 40,
//     color: '#888',
//     fontSize: 15,
//     paddingLeft: 15,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//   },
// })