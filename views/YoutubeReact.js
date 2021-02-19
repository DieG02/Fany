import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'
import ytdl from 'react-native-ytdl'


const youtubeURL = 'https://www.youtube.com/watch?v=W5uHVZWUEY0'
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
          uri: 'https://r3---sn-uxaxjxougv-x1x6.googlevideo.com/videoplayback?expire=1613677110&ei=1m0uYPu5LbCAobIPjuSqKA&ip=2800%3A810%3A459%3A8562%3A60d7%3A5375%3A3558%3A5494&id=o-AA6GpAT6tK3i_cybfaNhkAz4UxyKCAw0zOW9WFlTRoa2&itag=251&source=youtube&requiressl=yes&mh=fJ&mm=31%2C29&mn=sn-uxaxjxougv-x1x6%2Csn-x1x7dn7k&ms=au%2Crdu&mv=m&mvi=3&pl=48&initcwndbps=1028750&vprv=1&mime=audio%2Fwebm&ns=X-K08fCOSNqcI7ryJhH2U-YF&gir=yes&clen=3193590&dur=211.501&lmt=1602385544048461&mt=1613655163&fvip=3&keepalive=yes&c=WEB&txp=5531432&n=b1v7BYjbcTIvCMMhP&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMqDP9F8aw2DfN8GEHtXumV9F8_-PCMpeEJ9iKmjGwbsAiEAywgQlR7gIRNiKjtgs8y5dsr28w_KFh-2sszxxDAP6H8%3D&ratebypass=yes&sig=AOq0QJ8wRgIhAN4hkCFS9mTB3HGeKwr28NofVs-K1QEU8HRlUd5w6G82AiEA5-WrLO2jquEixUL8js5Dv5_pht5qL_Yw5314YXw_X54%3D'
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