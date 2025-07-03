import {View } from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() {
  return <View style={{
    backgroundColor:'#f8f4f4',
    padding:20,
    paddingTop:100,

  }}>
  <Card
  title="Red jacket for sale"
  subTitle="$100"
   />
    
  </View>
  
  ;
}

