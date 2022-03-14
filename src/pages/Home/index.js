import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={20} />
            <FoodCard name="Soto" image={FoodDummy1} />
            <FoodCard name="Rawon" image={FoodDummy2} />
            <FoodCard name="Sate" image={FoodDummy3} />
            <Gap width={20} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
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
