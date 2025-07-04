import 'react-native-gesture-handler'; // MUST be at the top!
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
