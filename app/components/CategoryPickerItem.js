import React from 'react';
import { View,StyleSheet } from 'react-native'
import Icon from './Icon';
import AppText from './AppText';

function CategoryPickerItem({item,onPress}) {
    return <View>
        <Icon backgroundColor={item.backgroundColor} name={item.icon}  size={80}/>
        <AppText>{item.label}</AppText>
    </View>
}

const styles = StyleSheet.create({
    container: {

    }
    
})


export default CategoryPickerItem;