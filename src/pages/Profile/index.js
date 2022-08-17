import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileDummy} from '../../assets';
import {colors, fonts, getData, showMessage, storeData} from '../../utils';
import {ProfileTabSection} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios';

const Profile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  };

  useEffect(() => {
    getData('token').then(res => {
      setToken(res.value);
    });
  }, []);

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxWidth: 200,
      maxHeight: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const updatePhoto = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets[0]);
    const dataImage = {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    };
    const photoForUpload = new FormData();
    photoForUpload.append('file', dataImage);
    getData('token').then(resToken => {
      fetch('http://otwlulus.com/foodmarket-backend/public/api/user/photo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: resToken.value,
        },
        body: photoForUpload,
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('response object:', responseJson.data);
          getData('userProfile').then(resUser => {
            showMessage('Update Photo Berhasil', 'success');
            resUser.profile_photo_url = `http://otwlulus.com/foodmarket-backend/public/storage/${responseJson.data[0]}`;
            storeData('userProfile', resUser).then(() => {
              updateUserProfile();
            });
          });
        })
        .catch(err => {
          console.log('error :', err);
          showMessage('Terjadi kesalahan di API Update Photo');
        });
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <TouchableOpacity onPress={updatePhoto}>
            <View style={styles.borderPhoto}>
              <Image
                source={{uri: userProfile.profile_photo_url}}
                style={styles.photoContainer}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
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
