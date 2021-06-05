import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  containerHead: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 10,
  },

  image: {
    width: 300,
    height: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 10,
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

const CardsSet = ({route}) => {
  const {id, name, images} = route.params;
  console.log('nameset', name);
  const [doneFetch, setDoneFetch] = useState();

  const [pokeInfo, setPokeInfo] = useState([]);
  const navigations = useNavigation();
  useEffect(() => getData(), []);
  const getData = async () => {
    //const pokeUrl = 'https://api.pokemontcg.io/v2/sets';
    const pokeUrlCards = `https://api.pokemontcg.io/v2/cards?q=set.id:${id}`;
    /* const pokemonRes = await axios.get(pokeUrlCards);
    const poke = await pokemonRes.data;
    setDoneFetch(true);

    setPokeInfo(poke.data); */
    fetch(pokeUrlCards, {
      headers: {'X-Api-Key': 'aee24460-cb0f-4725-a129-6d4dccff0459'},
    })
      .then(res => res.json())
      .then(data => {
        setDoneFetch(true);
        setPokeInfo(data.data);
        console.log('data', pokeInfo);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      {doneFetch ? (
        <SafeAreaView style={styles.container}>
          <LinearGradient
            colors={['#438cf2', '#3ebbfe']}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              flexDirection: 'column',
            }}>
            <Header text={`cards of the set ${name}`} />
            <View>
              <FlatList
                data={pokeInfo}
                keyExtractor={({id}) => id}
                showsVerticalScrollIndicator={false}
                renderItem={({
                  item: {
                    name,
                    images,
                    id,
                    hp,
                    abilities,
                    types,
                    attacks,
                    weaknesses,
                    retreatCost,
                  },
                }) => {
                  return (
                    <Card
                      id={id}
                      images={images}
                      name={name}
                      hp={hp}
                      abilities={abilities}
                      types={types}
                      attacks={attacks}
                      weaknesses={weaknesses}
                      retreatCost={retreatCost}
                    />
                  );
                }}
              />
            </View>
          </LinearGradient>
          <View style={{backgroundColor: 'trasparent'}}>
            <LinearGradient
              colors={['#ff3c41', '#ff653c']}
              style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigations.pop();
                }}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </SafeAreaView>
      ) : (
        <LinearGradient
          colors={['#438cf2', '#3ebbfe']}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <Text>LOADING</Text>
        </LinearGradient>
      )}
    </>
  );
};

export default CardsSet;
