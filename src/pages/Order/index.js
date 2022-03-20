import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);

  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.page}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {flex: 1, marginTop: 18},
});
