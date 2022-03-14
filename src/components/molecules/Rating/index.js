import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICStartOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.startContainer}>
        <ICStartOn />
        <ICStartOn />
        <ICStartOn />
        <ICStartOn />
        <ICStartOn />
      </View>
      <Text>5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  startContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
