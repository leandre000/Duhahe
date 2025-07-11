import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;

}
//styles
const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default ErrorMessage;
