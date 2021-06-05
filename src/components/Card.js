import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  card: {
    marginTop: 10,

    elevation: 5,
  },

  image: {
    width: 300,
    height: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

const Card = ({
  name,
  id,
  images,
  hp,
  abilities,
  types,
  attacks,
  weaknesses,
  retreatCost,
  activeButton,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          console.log('pressTocard');
          navigation.navigate('CardInfo', {
            name: name,
            id: id,
            hp: hp,
            images: images,
            abilities: abilities,
            types: types,
            attacks: attacks,
            weaknesses: weaknesses,
            retreatCost: retreatCost,
            activeButton: activeButton,
          });
        }}>
        <Image style={styles.image} source={{uri: images.large}} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
