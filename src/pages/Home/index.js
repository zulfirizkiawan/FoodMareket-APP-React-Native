import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={20} />
            {food.map(itemFood => {
              return (
                <FoodCard
                  key={itemFood.id}
                  image={{uri: itemFood.picturePath}}
                  name={itemFood.name}
                  rating={itemFood.rate}
                  onPress={() => navigation.navigate('FoodDetail', itemFood)}
                />
              );
            })}

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
