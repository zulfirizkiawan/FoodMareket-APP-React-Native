import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ItemListFood = ({image, onPress, items, rating}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.imgFood} />
        <View style={styles.content}>
          <Text style={styles.nameFood}>Soup Familty</Text>
          <Text style={styles.idr}>IDR 40.000</Text>
        </View>
        {items && !rating && <Text style={styles.nameFood}>{items} items</Text>}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  imgFood: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 20,
  },
  nameFood: {
    fontFamily: fonts.primary[400],
    fontSize: 15,
    color: colors.primary,
  },
  idr: {
    fontFamily: fonts.primary[400],
    fontSize: 15,
    color: colors.secondary,
  },
  content: {flex: 1},
});
