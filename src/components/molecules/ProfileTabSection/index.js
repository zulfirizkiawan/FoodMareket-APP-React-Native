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
import ItemListMenu from '../ItemListMenu';

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

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListMenu text="Edit Profile" />
        <ItemListMenu text="Home Address" />
        <ItemListMenu text="Security" />
        <ItemListMenu text="Payments" />
      </View>
    </ScrollView>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 10, backgroundColor: colors.white, flex: 1}}>
        <ItemListMenu text="Rate App" />
        <ItemListMenu text="Help Center" />
        <ItemListMenu text="Privacy & Policy" />
        <ItemListMenu text="PaymTerms & Conditionsents" />
      </View>
    </ScrollView>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
