import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,
  Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';

function AppPicker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = '100%',
  placeholder,
  numberOfColumns,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {/* Left icon */}
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {/* Selected label or placeholder */}
          <Text style={[styles.text, { color: selectedItem ? colors.dark : colors.medium }]}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>

          {/* Right icon if selectedItem has one */}
          {selectedItem?.icon && (
            <MaterialCommunityIcons
              name={selectedItem.icon}
              size={20}
              color={colors.medium}
              style={styles.rightIcon}
            />
          )}

          {/* Chevron down */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.chevronIcon}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  rightIcon: {
    marginLeft: 5,
  },
  chevronIcon: {
    marginLeft: 10,
  },
});

export default AppPicker;
