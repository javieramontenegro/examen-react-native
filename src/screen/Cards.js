import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Loading from '../components/Loading';

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
  input: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 50,
    borderColor: '#4d4e4f',
    borderWidth: 2,
    paddingHorizontal: 10,

    marginTop: 5,
  },

  containerLoading: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
});

const Cards = () => {
  const [doneFetch, setDoneFetch] = useState();

  const [pokeInfo, setPokeInfo] = useState([]);
  const [filterPoke, setFilterPoke] = useState([]);
  const navigations = useNavigation();
  useEffect(() => getData(), []);
  const getData = async () => {
    //const pokeUrl = 'https://api.pokemontcg.io/v2/sets';
    const pokeUrlCards = `https://api.pokemontcg.io/v2/cards`;
    /*  const pokemonRes = await axios.get(pokeUrlCards);
    const poke = await pokemonRes.data; */
    fetch(pokeUrlCards, {
      headers: {'X-Api-Key': 'aee24460-cb0f-4725-a129-6d4dccff0459'},
    })
      .then(res => res.json())
      .then(data => {
        setDoneFetch(true);
        setPokeInfo(data.data);
        setFilterPoke(data.data);
      })
      .catch(err => console.log(err));
    /* setDoneFetch(true);

    setPokeInfo(poke.data); */
  };
  const filterCards = useCallback(
    searchText => {
      if (searchText) {
        const result = pokeInfo.filter(({name}) =>
          name.toLowerCase().includes(searchText),
        );

        setFilterPoke(result);
      } else {
        setFilterPoke(pokeInfo);
      }
    },
    [pokeInfo],
  );
  console.log('resCards', pokeInfo);
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
            <Header text={'Cards'} />
            <TextInput
              style={styles.input}
              placeholder="Search for a Pokemon"
              autoCapitalize="none"
              onChangeText={filterCards}
            />
            <View>
              <FlatList
                data={filterPoke}
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
        </SafeAreaView>
      ) : (
        <View style={styles.containerLoading}>
          <Loading colorBack="white" />
        </View>
      )}
    </>
  );
};

export default Cards;
