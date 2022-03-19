import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyOrder} from '../../components';

const Order = () => {
  return (
    <View style={styles.page}>
      <EmptyOrder />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
