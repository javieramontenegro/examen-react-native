import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import CardsNavigation from './CardsStack';
import ProfileNavigation from './ProfileStack';
import CardsScreen from '../screen/Cards';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypocons from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const TabStack = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#438cf2',
        inactiveTintColor: '#6E8687',
        style: {},
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, focused}) => {
            Icon.loadFont();
            const iconSize = focused ? 30 : 25;
            return (
              <View style={styles.icon}>
                <Icon name="home" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Cards"
        component={CardsNavigation}
        options={{
          tabBarIcon: ({color, focused}) => {
            Icon.loadFont();
            const iconSize = focused ? 27 : 20;
            return (
              <View style={styles.icon}>
                <Icon name="cards" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({color, focused}) => {
            Icon.loadFont();
            const iconSize = focused ? 35 : 25;
            return (
              <View style={styles.icon}>
                <Icon name="account" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabStack;
