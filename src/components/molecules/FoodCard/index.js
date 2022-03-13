import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {FoodDummy1, ICStartOn} from '../../../assets';
import {colors, fonts} from '../../../utils';

const FoodCard = ({image, name, rating, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={FoodDummy1} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>Soto</Text>
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
          {/* <Rating number={rating} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#565656',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 18,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {padding: 12},
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.primary,
  },
  startContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
