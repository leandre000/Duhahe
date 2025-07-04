import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingVertical: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft:10,
    justifyContent:'center',


  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 14,
  },
});

export default ListItem;
