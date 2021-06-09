import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  FlatList,
  SafeAreaViewBase,
  VirtualizedList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Info from '../components/Info';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',

    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  containerLine: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  containerHp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,

    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
const CardInfo = ({route}) => {
  const {
    id,
    name,
    images,
    hp,
    abilities,
    types,
    attacks,
    weaknesses,
    retreatCost,
  } = route.params;
  const navigations = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Info
          id={id}
          name={name}
          images={images}
          hp={hp}
          abilities={abilities}
          types={types}
          attacks={attacks}
          weaknesses={weaknesses}
          retreatCost={retreatCost}
        />
      </ScrollView>

      <View>
        <LinearGradient colors={['#ff3c41', '#ff653c']} style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigations.pop();
            }}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default CardInfo;
