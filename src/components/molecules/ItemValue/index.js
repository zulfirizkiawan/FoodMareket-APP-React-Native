import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ItemValue = ({label, value, valueColor = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  value: color => ({
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: color,
  }),
});
