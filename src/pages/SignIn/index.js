import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors, useForm} from '../../utils';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading, signInAction} from '../../redux/action';

const SignIn = ({navigation}) => {
  const [form, setFrom] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Gap height={22} />
      <View style={styles.content}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setFrom('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setFrom('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button color="#FFC700" text="Sign In" onPress={onSubmit} />
        <Gap height={15} />
        <Button
          color="#8D92A3"
          text="Create New Account"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
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
