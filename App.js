import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItem from './app/components/ListItem';
import MessagesScreen from './app/screens/MessagesScreen';
import AppText from './app/components/AppText';
import ListingEditScreen from './app/screens/ListingEditingScreen';



export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 20 }}>
   <ListingEditScreen/>
    </GestureHandlerRootView>
  );
}
