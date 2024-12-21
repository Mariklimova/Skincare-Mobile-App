import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


export default function RootLayout() {
  
  const [loaded] = useFonts({
    // RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    // RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
    // RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    // RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="categories" />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
