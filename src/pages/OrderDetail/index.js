import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy2} from '../../assets';
import {colors, fonts, getData} from '../../utils';
import Axios from 'axios';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then(resToken => {
      Axios.post(
        `http://otwlulus.com/foodmarket-backend/public/api/transaction/${order.id}`,
        data,
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
        .then(res => {
          console.log('sukses cancel :', res);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch(err => {
          console.log('sukses cancel :', err);
        });
    });
  };
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={{uri: order.food.picturePath}}
          items={order.quantity}
          type="order-summary"
          price={order.food.price}
          name={order.food.name}
        />
        <Gap height={10} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={order.food.price * order.quantity}
          type="currency"
        />
        <ItemValue label="Driver" value={10000} type="currency" />
        <ItemValue
          label="Tax 5%"
          value={(10 / 100) * order.food.price * order.quantity}
          type="currency"
        />
        <ItemValue
          label="Total Price"
          value={order.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phoneNumber} />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No." value={order.user.houseNumber} />
        <ItemValue label="City" value={order.user.city} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#FM${order.id}`}
          value={order.status}
          valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
        />
      </View>
      {order.status === 'PENDING' && (
        <View style={styles.content}>
          <View style={styles.button}>
            <Button
              color="#D9435E"
              text="Cancel My Order"
              textColor="#FFFFFF"
              onPress={onCancel}
            />
          </View>
        </View>
      )}
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

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
