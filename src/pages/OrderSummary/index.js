import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {colors, fonts, getData} from '../../utils';
import Axios from 'axios';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  useEffect(() => {
    getData('token').then(res => {
      // console.log('token :', res);
      setToken(res.value);
    });
  }, []);

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    Axios.post(
      'http://otwlulus.com/foodmarket-backend/public/api/checkout',
      data,
      {
        headers: {
          Authorization: token,
        },
      },
    )
      .then(res => {
        console.log('checkout sukses :', res.data);
        setIsPaymentOpen(true);
        setPaymentURL(res.data.data.payment_url);
      })
      .catch(err => {
        console.log('checkout error :', err);
      });
  };

  const onNavChange = state => {
    console.log('nav :', state);
    // const urlSuccess =
    //   'https://app.sandbox.midtrans.com/snap/v3/redirection/282fc119-9bcf-47b4-9f78-273e69ebb5a0';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.replace('SuccessOrder');
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

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
          image={{uri: item.picturePath}}
          items={transaction.totalItem}
          type="order-summary"
          price={item.price}
          name={item.name}
        />
        <Gap height={10} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 5%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <Button text="Checkout Now" onPress={onCheckout} />
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
