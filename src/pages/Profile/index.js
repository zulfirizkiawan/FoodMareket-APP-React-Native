import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';
import {colors, fonts} from '../../utils';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <TouchableOpacity>
            <View style={styles.borderPhoto}>
              <Image source={ProfileDummy} style={styles.photoContainer} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>zulfi rizkiawan</Text>
        <Text style={styles.email}>zuki@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, marginTop: 18},
  profileDetail: {backgroundColor: colors.white, paddingBottom: 26},
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.primary,
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    textAlign: 'center',
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
