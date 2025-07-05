import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScren';



export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 20 }}>
   <RegisterScreen/>
    </GestureHandlerRootView>
  );
}
