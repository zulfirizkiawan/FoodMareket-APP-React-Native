import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodCard, Gap, HomeProfile} from '../../components';
import {FoodDummy1} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={20} />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <Gap width={20} />
          </View>
        </ScrollView>
        <View style={styles.tabContainer}>{/* <HomeTabSection /> */}</View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
