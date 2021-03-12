import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { isPlaying, isSaved, setLoop } from '../../redux/actions/uiAction.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import {
  faBookmark as faBookmarkFill,
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faReply,
  faReplyAll,
} from '@fortawesome/free-solid-svg-icons'
import { playSound, pauseSound, isLooping } from '../../redux/actions/soundAction.js'


// ----- CONSTANTS ----- // 
const _light = '#eeeeee',
      _grey = '#dddddd',
      _dark = '#151515',
      _blue = '#1dcce3';


// ----- COMPONENT ----- // 
export default function Buttons() {

  const loop = {
    noRepeat: [faReply, _grey],
    repeat: [faReply, _blue],
    repeatOne: [faReplyAll, _blue]
  };

  const sound = useSelector(state => state.audio.sound);
  const { playing, save, icon } = useSelector(state => state.app.song)
  const dispatch = useDispatch();
  const isPlayingDispatch = (value) => dispatch(isPlaying(value)),
        isSavedDispatch = (value) => dispatch(isSaved(value)),
        setLoopDispatch = (value) => dispatch(setLoop(value));


  return(
    <View style= { styles.buttonContent }>
      <TouchableOpacity
        style={{ height: '100%', justifyContent: 'center' }}
        onPress={() => {
          isSavedDispatch(!save)
          if(save !== true) alert('Saved sucessfull');
        }}
      >
        <FontAwesomeIcon 
          icon={ save ? faBookmarkFill : faBookmark }  
          color={ _grey } 
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
            isPlayingDispatch(!playing)
            playing ? pauseSound(sound) : playSound(sound) 
          }}
        >
          <FontAwesomeIcon 
            icon={ playing ? faPauseCircle : faPlayCircle }
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
              setLoopDispatch('repeat')
              return console.log('Must repeat List!')
  
            case 'repeat':
              setLoopDispatch('repeatOne')
              return isLooping(true, sound)

            case 'repeatOne':
              setLoopDispatch('noRepeat')
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