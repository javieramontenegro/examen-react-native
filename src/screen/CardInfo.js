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
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  /* useEffect(() => getEnergy(types[0]), []);
  const [srcEnergy, setSrcEnergy] = useState(null);
  console.log('energy', srcEnergy);
  const getEnergy = energy => {
    if (energy === 'Grass') {
      setSrcEnergy(require('../assets/e_grass.png'));
    }
    if (energy === 'Colorless') {
      setSrcEnergy(require('../assets/e_normal.png'));
    }
    if (energy === 'Darkness') {
      setSrcEnergy(require('../assets/e_darck.png'));
    }
    if (energy === 'Dragon') {
      setSrcEnergy(require('../assets/e_dragon.png'));
    }
    if (energy === 'Fairy') {
      setSrcEnergy(require('../assets/e_fairy.png'));
    }
    if (energy === 'Fighting') {
      setSrcEnergy(require('../assets/e_figth.png'));
    }
    if (energy === 'Fire') {
      setSrcEnergy(require('../assets/e_fire.png'));
    }
    if (energy === 'Lightning') {
      setSrcEnergy(require('../assets/e_ligth.png'));
    }
    if (energy === 'Metal') {
      setSrcEnergy(require('../assets/e_metal.png'));
    }
    if (energy === 'Psychic') {
      setSrcEnergy(require('../assets/e_psy.png'));
    }
    if (energy === 'Water') {
      setSrcEnergy(require('../assets/e_water.png'));
    }
  }; */
  return (
    <SafeAreaView style={styles.containerLine}>
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
