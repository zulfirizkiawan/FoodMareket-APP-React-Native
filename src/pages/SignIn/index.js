import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors} from '../../utils';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Gap height={22} />
      <View style={styles.content}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button color="#FFC700" text="Sign In" />
        <Gap height={15} />
        <Button color="#8D92A3" text="Create New Account" textColor="#FFFFFF" />
      </View>
    </View>
  );
};

export default SignIn;

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
