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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={2}
          price="40.000"
          name="Juss Apa Aja"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={2}
          price="40.000"
          name="Juss Teh"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={2}
          price="40.000"
          name="Kopi Kenangan"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy6}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={2}
          price="40.000"
          name="Salad"
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={2}
          price="40.000"
          name="Salad"
          date="27 10 2022"
          status="CANCELLED"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy6}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={2}
          price="40.000"
          name="Salad"
          date="27 10 2022"
          status="CANCELLED"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={2}
          price="40.000"
          name="Salad"
          date="27 10 2022"
          status="SUCCES"
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={2}
          price="40.000"
          name="Salad"
          date="27 10 2022"
          status="CANCELLED"
        />
      </View>
    </ScrollView>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

const styles = StyleSheet.create({});
