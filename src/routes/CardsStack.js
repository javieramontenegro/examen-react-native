import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CardInfo from '../screen/CardInfo';
import Cards from '../screen/Cards';
const HomeStack = createStackNavigator();

const CardsNavigation = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Cards" component={Cards} />
    <HomeStack.Screen name="CardInfo" component={CardInfo} />
  </HomeStack.Navigator>
);

export default CardsNavigation;
