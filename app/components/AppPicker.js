import React, { useState } from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items,onSelectItem,placeholder,selectedItem, showChevron = true }) {
const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
     <TouchableWithoutFeedback onPress={() =>setModalVisible(true)}>
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
      {showChevron && (
        <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
    </View>

    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
    <Screen>
 <Button title='Close' onPress={() => setModalVisible(false)}/>
 <FlatList 
    data={items}
    keyExtractor={item => item.value.toString()}
    renderItem={({item}) => <PickerItem
        label={item.label}
        onPress={() => {
        setModalVisible(false);
        onSelectItem(item);
    
        }}
    /> }
 />
    </Screen>
       
    </Modal>

    </>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.dark,
  },
});

export default AppPicker;
