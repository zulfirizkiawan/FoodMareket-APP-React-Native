import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SignIn, SplashScreen} from '../pages';
// import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Order" component={Order} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
