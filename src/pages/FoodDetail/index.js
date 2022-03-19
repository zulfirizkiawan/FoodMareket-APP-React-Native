import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FoodDummy1, ICBackWhite} from '../../assets';
import {Rating, Button, Counter} from '../../components';
import {colors, fonts} from '../../utils';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Soto</Text>
              <Rating />
            </View>
            <Counter />
            {/* <Text>COUNTER</Text> */}
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 289.000</Text>
            {/* <Number number={totalItem * price} style={styles.priceTotal} /> */}
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 300, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: fonts.primary[400], color: colors.primary},
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.primary,
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  priceTotal: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.primary,
  },
});
