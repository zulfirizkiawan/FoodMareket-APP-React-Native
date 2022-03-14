// import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {fonts} from '../../../utils';
// import {getData} from '../../../utils';

const HomeProfile = () => {
  //   const navigation = useNavigation();
  //   const [photo, setPhoto] = useState(ProfileDummy);

  //   useEffect(() => {
  //     navigation.addListener('focus', () => {
  //       getData('userProfile').then((res) => {
  //         setPhoto({uri: res.profile_photo_url});
  //       });
  //     });
  //   }, [navigation]);

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  appName: {fontSize: 22, fontFamily: fonts.primary[600], color: '#020202'},
  desc: {fontSize: 14, fontFamily: fonts.primary[400], color: '#8D92A3'},
  profile: {width: 60, height: 60, borderRadius: 30},
});
