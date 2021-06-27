import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Entypo, Ionicons, Foundation } from '@expo/vector-icons'
import { faReply, faReplyAll } from '@fortawesome/free-solid-svg-icons'

import { isPlaying, isSaved, setLoop } from '../../redux/actions/uiAction'
import { playSound, pauseSound, isLooping } from '../../redux/actions/soundAction'
import { MAIN, WHITE, LIGHT } from '../MainStyles'


// ----- COMPONENT ----- // 
export default function Buttons() {

  const loop = {
    noRepeat: [faReply, LIGHT],
    repeat: [faReply, MAIN],
    repeatOne: [faReplyAll, MAIN]
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
        style={styles.center}
        onPress={() => {
          isSavedDispatch(!save)
          if(save !== true) alert('Saved sucessfull');
        }}
      >
        {save
          ? <Ionicons name="bookmark" size={20} color={LIGHT} />
          : <Ionicons name="bookmark-outline" size={20} color={LIGHT} />
        }
      </TouchableOpacity>

      <View style={ styles.buttons }>
        <TouchableOpacity
          style={styles.center}
          onPress={() => alert('Do something')}
        >
          <Ionicons name="play-skip-back" size={24} color={LIGHT} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => {
            isPlayingDispatch(!playing)
            playing ? pauseSound(sound) : playSound(sound) 
          }}
        >
          {playing
            ? <Foundation name='pause' size={30} color='#151515' />
            : <Entypo name='controller-play' size={30} color='#151515' style={{marginLeft: 3}}/>
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.center}
          onPress={() => alert('Do something')}
        >
          <Ionicons name="play-skip-forward" size={24} color={LIGHT} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.center}
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
        <FontAwesomeIcon icon={ loop[icon][0] } color={ loop[icon][1] } size={20} />
      </TouchableOpacity>
    </View>
  )
}


// ----- STYLERS ----- //
const styles = StyleSheet.create({
  buttonContent: {
    marginTop: '3%',
    height: 60, 
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttons: {
    height: 50, 
    width: '60%', 
    justifyContent: 'space-around', 
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  circleButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
     alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 30,
  },
  center: {
    height: '100%', 
    justifyContent: 'center'
  }
})


