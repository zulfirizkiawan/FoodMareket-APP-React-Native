import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

/*
TYPE:
1. product
2. order-summary
3. in-progress
4. past-orders
*/

const ItemListFood = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product seperti di home page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.nameFood}>{name}</Text>
              <Text style={styles.idr}>IDR {price}</Text>
              {/* <Number number={idr} style={styles.idr} /> */}
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.nameFood}>{name}</Text>
              {/* <Number number={idr} style={styles.idr} /> */}
              <Text style={styles.idr}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.nameFood}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.idr}>{items} items</Text>
                <View style={styles.dot} />
                <Text style={styles.idr}>IDR {price}</Text>
                {/* <Number number={idr} style={styles.idr} /> */}
              </View>
            </View>
          </>
        );
      case 'past-orders':
        // item past orders
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.nameFood}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.idr}>{items}2 items</Text>
                <View style={styles.dot} />
                <Text style={styles.idr}>IDR {price}</Text>
                {/* <Number number={idr} style={styles.idr} /> */}
              </View>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.nameFood}>{name}</Text>
              <Text style={styles.idr}>IDR {price}</Text>
              {/* <Number number={idr} style={styles.idr} /> */}
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.imgFood} />
        {renderContent()}
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
  items: {
    fontSize: 13,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  date: {fontSize: 10, fontFamily: fonts.primary[400], color: colors.secondary},
  status: status => ({
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  row: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.secondary,
    marginHorizontal: 4,
  },
});
