import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import CardSet from '../screen/CardsSet';
import CardInfo from '../screen/CardInfo';
const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CardSet" component={CardSet} />
    <HomeStack.Screen name="CardInfo" component={CardInfo} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
