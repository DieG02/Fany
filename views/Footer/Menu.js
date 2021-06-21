import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity, // TouchableHighlight --> Show us a border / dark background
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setMenu } from '../../redux/actions/uiAction.js'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FontAwesome } from '@expo/vector-icons';

import {
  faHome,
  faSearch,
  faCompactDisc as faLibrary
} from '@fortawesome/free-solid-svg-icons'
const { height } = Dimensions.get('window')





export default function Menu({ menu }) {
  const { state, descriptors, navigation, title } = menu

  const arr = [
    { name: 'Home', icon: faHome },
    { name: 'Search', icon: faSearch },
    { name: 'Library', icon: faLibrary },
  ]
  const sub = {
    "Home": { icon: "home", title: "Inicio" },
    "Search": { icon: "search", title: "Buscar" },
    "Library": { icon: "library", title: "Favoritos" },
    "Profile": { icon: "user", title: "Perfil" },
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

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
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            <FontAwesome name={sub[label].icon} size={title || isFocused ? 24 : 28} color={ isFocused ? '#EEE' : '#444D52' } />
            {title || isFocused &&
              <Text style={{ color: isFocused ? '#EEE' : '#444D52', fontSize: 11 }} >
                {sub[label].title}
              </Text> 
            }
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
    justifyContent: "space-between",
    paddingHorizontal: 60,
  },
  item: {
    // backgroundColor: "#f00",  
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
})