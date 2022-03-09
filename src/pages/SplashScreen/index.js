import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSplash} from '../../assets';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <ILSplash />
      <Gap height={10} />
      <Text style={styles.judul}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    fontSize: 32,
  },
});
