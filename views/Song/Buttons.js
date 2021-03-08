import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import {
  faBookmark as faBookmarkFill,
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons'
import { playSound, pauseSound, isLooping } from '../../redux/actions/soundAction.js'


// ----- CONSTANTS ----- // 
const _grey = '#dddddd';
    

// ----- COMPONENT ----- // 
export default function Buttons({ props }) {

  const { setToggle, isToggleOn } = props
  const { icon, loop } = isToggleOn;

  const sound = useSelector(state => state.audio.sound);


  return(
    <View style= { styles.buttonContent }>
      <TouchableOpacity
        style={{ height: '100%', justifyContent: 'center' }}
        onPress={() => {
          setToggle({
            ...isToggleOn,
            save: !isToggleOn.save
          })
          if(isToggleOn.save !== true) alert('Saved sucessfull');
        }}
      >
        <FontAwesomeIcon 
          icon={ isToggleOn.save ? faBookmarkFill : faBookmark }  
          color={ _grey} 
          size={ 20 }
        />
      </TouchableOpacity>

      <View style={ styles.buttons }>
        <TouchableOpacity
          style={{ height: '100%', justifyContent: 'center' }}
          onPress={() => alert('Do something')}
        >
          <FontAwesomeIcon 
            icon={ faStepBackward }  
            color={ _grey} 
            size={ 25 }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: '100%', justifyContent: 'center' }}
          onPress={() => {
            setToggle({
              ...isToggleOn,
              play: !isToggleOn.play
            })
            isToggleOn.play ? pauseSound(sound) : playSound(sound) 
          }}
        >
          <FontAwesomeIcon 
            icon={ isToggleOn.play ? faPauseCircle : faPlayCircle }
            color={ _grey }
            size={ 55 }
            style={ styles.icons }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: '100%', justifyContent: 'center' }}
          onPress={() => alert('Do something')}
        >
          <FontAwesomeIcon 
            icon={ faStepForward }  
            color={ _grey } 
            size={ 25 }
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ height: '100%', justifyContent: 'center' }}
        onPress={() => {
          switch(icon){
            case 'noRepeat':
              setToggle({
                ...isToggleOn,
                icon: 'repeat'
              })
              return console.log('Must repeat List!')
  
            case 'repeat':
              setToggle({
                ...isToggleOn,
                icon: 'repeatOne'
              })
              return isLooping(true, sound)

            case 'repeatOne':
              setToggle({
                ...isToggleOn,
                icon: 'noRepeat'
              })
              return isLooping(false, sound)
          }
        }}
      >
        <FontAwesomeIcon 
          icon={ loop[icon][0] }  
          color={ loop[icon][1] } 
          size={ 20 }
        />
      </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  buttonContent: {
    height: '30%', 
    width: '100%', 
    justifyContent: 'space-between', 
    flexDirection: 'row',
    marginTop: '5%',
  },
  buttons: {
    height: '100%', 
    width: '60%', 
    justifyContent: 'space-around', 
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})