import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity, // TouchableHighlight --> Show us a border / dark background
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHome,
  faSearch,
  faCompactDisc as faLibrary
} from '@fortawesome/free-solid-svg-icons'
const { width, height } = Dimensions.get('window')


export default function Menu({ menu,  setMenu }) {
  
  const arr = [
    { name: 'Home', icon: faHome },
    { name: 'Search', icon: faSearch },
    { name: 'Library', icon: faLibrary },
  ]

  return(
    <View style={ styles.menu }>
      {arr.map(({ name, icon }) => {
        return (
          <View style={ styles['item' + name] } key={ name }>
            <TouchableOpacity
              onPress={() => setMenu(name)}
              accessibilityRole='imagebutton'
              disabled={ menu === name }
            >
            <FontAwesomeIcon 
              icon={ icon } 
              style={ styles.itemBox }
              color={ menu === name ? '#fff' : '#999' } 
              size={ height > 600 ? 25 : 21 }
            />
            <Text style={ [styles.itemContent, { color: menu === name ? '#fff' : '#999' }] }>
              { name }
            </Text>  
            </TouchableOpacity>
          </View>
        )
      })}   
    </View>
  )
}


const styles = StyleSheet.create({
  menu: {
    height:  height > 600 ? 45 : 40,
    width: '100%',
    backgroundColor: '#222',
    flexDirection: 'row', // <--- Nice!!!
  },
  itemBox: {
    marginTop: '8%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  itemContent: {
    fontSize:  9,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 'auto',
  },
  itemHome: {
    height: '100%',
    width: '13%',
    marginLeft: 'auto',
  },
  itemSearch: { 
    height: '100%',
    width: '13%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  itemLibrary: {
    height: '100%',
    width: '13%',  
    marginRight: 'auto', 
  }
})