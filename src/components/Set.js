import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f9ff',

    margin: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    borderWidth: 2,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    flexWrap: 'wrap',
    marginBottom: 10,
    flexShrink: 1,
  },

  text: {
    fontSize: 15,
    color: 'black',

    marginBottom: 10,
  },

  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  constainerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  constainerText: {
    flexDirection: 'column',
    marginLeft: 10,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  containerLegal: {
    flexDirection: 'column',

    padding: 20,
  },
  textLegal: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 10,
  },
});

const Set = ({name, id, images, releaseDate, legalities}) => {
  const navigation = useNavigation();

  console.log('set', name);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('press');
          navigation.navigate('CardSet', {
            id: id,
            name: name,
          });
        }}>
        <Image style={styles.image} source={{uri: images.logo}} />

        <View style={styles.constainerLogo}>
          <Image style={styles.logo} source={{uri: images.symbol}} />
          <View style={styles.constainerText}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{releaseDate}</Text>
          </View>
        </View>
        <View style={styles.containerLegal}>
          {legalities && legalities.expanded && (
            <Text style={styles.textLegal}>
              ☆ Expanded {legalities.expanded}
            </Text>
          )}
          {legalities && legalities.unlimited && (
            <Text style={styles.textLegal}>
              ☆ Standard {legalities.unlimited}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Set;
