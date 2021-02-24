import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFill,
  faArrowLeft,
  faBars,
  faReply,
  faReplyAll,
} from '@fortawesome/free-solid-svg-icons'
import Controls from './Controls.js'



// ----- CONSTANTS ----- // 
const IMAGE = require('../../assets/hybrid_theory.jpg');
const URL = 'https://r2---sn-uxaxjxougv-x1xe7.googlevideo.com/videoplayback?expire=1613940874&ei=KnQyYPmLN-fG1sQPkKaE8AU&ip=2800%3A810%3A459%3A8562%3A2986%3A4fab%3Acd6f%3A6a2&id=o-AHXFTS9c4GM0V6evyPLPab_uowCIa7IlmmS8IH6Fm8o4&itag=251&source=youtube&requiressl=yes&mh=Ty&mm=31%2C29&mn=sn-uxaxjxougv-x1xe7%2Csn-x1x7dn7z&ms=au%2Crdu&mv=m&mvi=2&pl=48&initcwndbps=928750&vprv=1&mime=audio%2Fwebm&ns=ufaeoypCQfybqPlvfSjw12wF&gir=yes&clen=2764008&dur=168.661&lmt=1548437461889833&mt=1613918921&fvip=2&keepalive=yes&c=WEB&txp=5511222&n=-8k4M_MhR7HQ9CJ3&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAJsRH4ItcA4-eiANrtPBwHcn-TIYKBctYE6iOH28IslUAiEAtlDt4ZpCjD75_LHEZuivBhu4sjoj4DhvuQM7oLW722Q%3D&ratebypass=yes&sig=AOq0QJ8wRQIgCn2ztZ7vH5Y8eTGxA8kPBYfVK61kh1ivK_F2PDuYUd4CIQCXw2iR_ZYKA1_8zcVlUMJH5WD1HD7YpbBVPZqC3YR9RQ%3D%3D';
const { width } = Dimensions.get('window');
const _light = '#eeeeee',
_grey = '#dddddd',
_dark = '#151515',
_blue = '#1dcce3';
const colorsGradient = ['#71BAC3', '#5D93A5', '#44637E', '#243442', '#111111'],
locationsGradient = [0.05, 0.2, 0.4, 0.6, 0.85];




// ----- COMPONENT ----- // 
export default function Song({ image, url }) {

  const [isToggleOn, setToggle] = useState({
    favourite: false,
    play: false,
    save: false,
    icon: 'noRepeat',
    loop: {
      noRepeat: [faReply, _grey],
      repeat: [faReply, _blue],
      repeatOne: [faReplyAll, _blue]
    }
  })


  return(
    <View style={ styles.main }>

      <LinearGradient
        // Background Linear Gradient
        colors={ colorsGradient }
        locations={ locationsGradient }
        style={styles.background}
      />
      <View style={ styles.top }>
        <TouchableOpacity style={ styles.iconBox }>
          <FontAwesomeIcon
            icon={ faArrowLeft }
            color={ _light }
            size={ 25 }
          />
        </TouchableOpacity>
        <TouchableOpacity style={ styles.iconBox }>
          <FontAwesomeIcon
            icon={ faBars }
            color={ _light }
            size={ 25 }
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.container }>
        <View 
          style={{ 
            height: '60%', 
            width: '100%', 
            justifyContent: 'center', 
            // backgroundColor: '#ff0000' 
          }}
        >
          <Image
            source={ IMAGE }
            style={ styles.image }
          />
        </View>

        <View 
          style={{ 
            height: '30%', 
            width: '100%', 
            justifyContent: 'flex-start', 
            // backgroundColor: '#ff0000' 
          }}
        >
          <View style={ styles.content }>
              <View style={ styles.text }>         
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                  Don't stay - Live in texas
                </Text>
                <Text style={{ fontSize: 13, color: _grey }}>
                  Hybrid Theory
                </Text>
              </View>

              <TouchableOpacity
                style={{ height: '100%', justifyContent: 'center' }}
                onPress={() => {
                  setToggle({
                    ...isToggleOn,
                    favourite: !isToggleOn.favourite
                  })
                  isToggleOn.favourite !== true ?
                    alert('Add to Favourites')
                  :
                    alert('Remove from Favourites')
                }}
              >
                <FontAwesomeIcon 
                  icon={ isToggleOn.favourite ? faHeartFill : faHeart }  
                  color={ isToggleOn.favourite ? _blue : _grey} 
                  size={ 20 }
                />
              </TouchableOpacity>
            </View>
            
            <Controls url={ URL } setToggle={ setToggle } isToggleOn={ isToggleOn }/>
         
            
          </View>
        </View>
      <StatusBar
        animated={true}
        backgroundColor={_dark}
        barStyle='light-content'
      />
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#67a4b3',
    width: '100%',
    height: '100%', 
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  top: {
    width: '100%',
    minHeight: 50,
    backgroundColor: 'rgba(50, 50, 50, 0.3)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '85%',
    height: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: width * 0.85,
    resizeMode: 'stretch'
  },
  content: {
    width: '100%', 
    height: '30%', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(50, 50, 50, 0.5)'
  },
  text: {
    width: '90%',
    justifyContent: 'center',
  },
})