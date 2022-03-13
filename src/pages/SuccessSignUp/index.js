import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ILSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccess />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.primary,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.secondary,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
