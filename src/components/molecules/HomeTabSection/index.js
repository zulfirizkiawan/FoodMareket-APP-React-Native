import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy6,
} from '../../../assets';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: fonts.primary[400],
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy6}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Populer = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy6}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Recommend = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy6}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Populer'},
    {key: '3', title: 'Recommend'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Populer,
    3: Recommend,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
