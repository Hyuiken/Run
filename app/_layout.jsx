// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-slate-400">
//       <Text className="text-3xl">|Welcome To Run'It!|</Text>
//       <Text className="text-5x1">|Chyril Hadrian Gadia|</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}

export default MainLayout