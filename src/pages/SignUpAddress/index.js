import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {colors} from '../../utils';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack={() => navigation.goBack()}
      />
      <Gap height={22} />
      <View style={styles.content}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          color="#FFC700"
          text="Sign Up Now"
          onPress={() => navigation.navigate('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 25,
    flex: 1,
  },
  page: {
    flex: 1,
  },
});
