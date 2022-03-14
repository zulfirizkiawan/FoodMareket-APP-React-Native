import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ItemListFood = ({image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          overflow: 'hidden',
          marginRight: 20,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.primary[400],
            fontSize: 15,
            color: colors.primary,
          }}>
          Soup Familty
        </Text>
        <Text
          style={{
            fontFamily: fonts.primary[400],
            fontSize: 15,
            color: colors.secondary,
          }}>
          IDR 40.000
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
