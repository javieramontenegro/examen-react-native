import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

import SetCards from '../components/Set';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
  },
  containerHead: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  back: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 50,
    borderColor: '#4d4e4f',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    color: '#7f7f7f',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 30,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  containerLoading: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
const Home = () => {
  const [doneFetch, setDoneFetch] = useState();

  const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => getData(), []);
  const getData = async () => {
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
    const pokeUrl = `https://api.pokemontcg.io/v2/sets`;

    /* const pokemonRes = await axios.get(pokeUrl, {
      headers: 'aee24460-cb0f-4725-a129-6d4dccff0459',
    });
    const poke = await pokemonRes.data;
    setDoneFetch(true);

    setPokeInfo(poke.data); */
    fetch(pokeUrl, {
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
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#438cf2', '#3ebbfe']}>
          <Header text={'Card Set'} />
          <View>
            <FlatList
              data={pokeInfo.reverse()}
              keyExtractor={({id}) => id}
              showsVerticalScrollIndicator={false}
              renderItem={({
                item: {name, images, id, releaseDate, legalities},
              }) => {
                return (
                  <SetCards
                    name={name}
                    images={images}
                    id={id}
                    releaseDate={releaseDate}
                    legalities={legalities}
                  />
                );
              }}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

export default Home;
