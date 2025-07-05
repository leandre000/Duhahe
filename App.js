import 'react-native-gesture-handler'; 
import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
const categories = [
  {
    label:"Furniture",
    value:1
  },
  {
    label:"Clothing",
    value:2
  },
  {
    label:"Cameras",
    value:3
  }
]


export default function App() {

 const [category,setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView style={{ flex: 1, padding: 20 }}>
      <AppPicker
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
       items={categories}
        icon="apps" 
        placeholder="Category" 

        />
      <AppTextInput icon="email" placeholder="Email" />
    </GestureHandlerRootView>
  );
}
