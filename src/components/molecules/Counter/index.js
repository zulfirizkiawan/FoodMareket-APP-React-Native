import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICBtnMin, ICBtnPlus} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Counter = ({onValueChange}) => {
  //   const [value, setValue] = useState(1);

  //   useEffect(() => {
  //     onValueChange(value);
  //   }, []);

  //   const onCount = type => {
  //     let result = value;
  //     if (type === 'plus') {
  //       result = value + 1;
  //     }
  //     if (type === 'minus') {
  //       if (value > 1) {
  //         result = value - 1;
  //       }
  //     }
  //     setValue(result);
  //     onValueChange(result);
  // onPress={() => onCount('minus')}
  // onPress={() => onCount('plus')}
  //   };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICBtnMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <ICBtnPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.primary,
    marginHorizontal: 10,
  },
});
