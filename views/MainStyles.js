import * as Font from 'expo-font'

const customFonts = {
  'Poppins-Thin': require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
  'Poppins-ExtraLight': require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
  'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
  'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
}

export const loadFontsAsync = async (setLoaded) => {
  await Font.loadAsync(customFonts);
  setLoaded(true)
}

export const MAIN = '#3a86fc',
             WHITE = '#FFF', 
             LIGHT = '#EEE', 
             GREY = '#666', 
             DARK = '#151515',
             BLACK = '#000';