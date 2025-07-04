import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet,View } from 'react-native';

function Screen({ children,style }) {
  return <SafeAreaView style={[styles.screen, style]}>
  <View style={styles.screen}>
{children}
  </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {

    flex: 1, 
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});

export default Screen;
