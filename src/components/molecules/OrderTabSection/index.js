import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {FoodDummy2, FoodDummy3} from '../../../assets';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getInProgress());
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        {inProgress.map(order => {
          return (
            <ItemListFood
              key={order.id}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  console.log('past order: ', pastOrders);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPastOrders());
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        {pastOrders.map(order => {
          return (
            <ItemListFood
              key={order.id}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="past-orders"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
              date={order.created_at}
              status={order.status}
            />
          );
        })}
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
