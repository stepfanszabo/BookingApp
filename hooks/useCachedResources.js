import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
// import { Asset } from "expo-asset";
// import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

// const images = [
//   require("../assets/images/illustration_1.png"),
//   require("../assets/images/illustration_2.png"),
//   require("../assets/images/illustration_3.png"),
// ];

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();

        // await Font.loadAsync({
        //   ...Ionicons.font,
        //   'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        // });

        // images.map(image => {
        //   return Asset.fromModule(image).downloadAsync();
        // });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
