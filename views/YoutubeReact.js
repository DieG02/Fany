import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native'


import { Video, AVPlaybackStatus } from 'expo-av'
import ytdl from 'react-native-ytdl'


const youtubeURL = 'https://www.youtube.com/watch?v=OnuuYcqhzCE'
const urls = async () => {
  const data = await ytdl(youtubeURL, { quality: 'highestaudio' });
  console.log(data);
}

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  React.useEffect(() => {
    urls()
  }, [])


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://r2---sn-uxaxjxougv-x1xe7.googlevideo.com/videoplayback?expire=1613854721&ei=oSMxYKiiBMiPobIP2caB6AE&ip=2800%3A810%3A459%3A8562%3Ae587%3A2f6d%3Ab15e%3A7d6f&id=o-AASb7EcVh3uyCOwAJQ4AYYsucwY06iOfiXlrdyCGYnla&itag=251&source=youtube&requiressl=yes&mh=Ty&mm=31%2C29&mn=sn-uxaxjxougv-x1xe7%2Csn-x1x7dn7z&ms=au%2Crdu&mv=m&mvi=2&pl=48&initcwndbps=1086250&vprv=1&mime=audio%2Fwebm&ns=qerUr-8iEti8eDPUe5f9ptUF&gir=yes&clen=2764008&dur=168.661&lmt=1548437461889833&mt=1613832760&fvip=2&keepalive=yes&c=WEB&txp=5511222&n=cRss1yRVK_gCvr9V&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANkBJ_nomqwUc7xTY-Nmgo0TjGzz_lZS2omwQhuAnDftAiBTat2DjRe-Y6D8GuXqvKUdZ0qOD4fScZbSPYvgF9yQyQ%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIgFP6bh9JpQ5hCxECiR9LJ907TS9icChe5RkncpmXQkN0CIQCgov9YmQQxcaoTmbtT-0lT6OUwDXk91WdOd3B_sXrOfg%3D%3D'
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});