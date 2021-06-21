import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons'

import {
  faHome,
  faSearch,
  faCompactDisc as faLibrary
} from '@fortawesome/free-solid-svg-icons'

const { height } = Dimensions.get('window')





export default function Menu({ menu }) {
  const { state, descriptors, navigation } = menu


  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =  route.name;
        const isFocused = state.index === index;
        const tabBar = {
          Home: { icon: 
            <Fontisto name='home' size={22} color={isFocused ? '#EEE' : "#444D52"} /> 
          },
          Search: { icon: 
            <Ionicons name='search' size={26} color={isFocused ? '#EEE' : "#444D52"} />  
          },
          Favourites: { icon: 
            <Ionicons name='library-sharp' size={25} color={isFocused ? '#EEE' : "#444D52"} /> 
          },
          Profile: { icon: 
            <FontAwesome name='user' size={25} color={isFocused ? '#EEE' : "#444D52"} /> 
          },
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            {tabBar[label].icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}








const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  item: {
    backgroundColor: '#f00',  
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})