import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent && <View style={styles.iconContainer}>{IconComponent}</View>}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
            style={styles.chevron}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  iconContainer: {
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.dark,
  },
  subTitle: {
    color: colors.medium,
    marginTop: 4,
  },
  chevron: {
    marginLeft: 10,
  },
});

export default ListItem;
