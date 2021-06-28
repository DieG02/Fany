import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons'


export default function TabBar({ props }) {
  const { state, descriptors, navigation } = props

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =  route.name;

        const menu = {
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
          })
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
            {menu[label].icon}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: '#151515',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  item: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})