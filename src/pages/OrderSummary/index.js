import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy2} from '../../assets';
import {colors, fonts} from '../../utils';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={FoodDummy2} items={14} />
        <Gap height={10} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 5%" value="IDR 20.000" />
        <ItemValue
          label="Total Price"
          value="IDR 460.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Rizkiawan" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Tajinan" />
        <ItemValue label="House No." value="A5 001" />
        <ItemValue label="City" value="Malang" />
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <Button
            text="Checkout Now"
            onPress={() => navigation.navigate('SuccessOrder')}
          />
        </View>
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    marginTop: 18,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.primary,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  button: {paddingHorizontal: 18},
});
