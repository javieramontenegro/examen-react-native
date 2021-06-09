import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignContent: 'center',

    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  containerLine: {padding: 10, width: '100%', height: '100%'},

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
});

export class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcEnergy: null,
    };
  }
  componentDidMount = () => {
    const {types} = this.props;
    this.getEnergy(types[0]);
  };
  getEnergy = energy => {
    if (energy === 'Grass') {
      this.setState({srcEnergy: require('../assets/e_grass.png')});
    }
    if (energy === 'Colorless') {
      this.setState({srcEnergy: require('../assets/e_normal.png')});
    }
    if (energy === 'Darkness') {
      this.setState({srcEnergy: require('../assets/e_darck.png')});
    }
    if (energy === 'Dragon') {
      this.setState({srcEnergy: require('../assets/e_dragon.png')});
    }
    if (energy === 'Fairy') {
      this.setState({srcEnergy: require('../assets/e_fairy.png')});
    }
    if (energy === 'Fighting') {
      this.setState({srcEnergy: require('../assets/e_figth.png')});
    }
    if (energy === 'Fire') {
      this.setState({srcEnergy: require('../assets/e_fire.png')});
    }
    if (energy === 'Lightning') {
      this.setState({srcEnergy: require('../assets/e_ligth.png')});
    }
    if (energy === 'Metal') {
      this.setState({srcEnergy: require('../assets/e_metal.png')});
    }
    if (energy === 'Psychic') {
      this.setState({srcEnergy: require('../assets/e_psy.png')});
    }
    if (energy === 'Water') {
      this.setState({srcEnergy: require('../assets/e_water.png')});
    }
  };
  render() {
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
    } = this.props;
    const {srcEnergy} = this.state;
    return (
      <>
        <View style={{paddingHorizontal: 10, flex: 1}}>
          <View>
            <Text style={styles.title}>{name}</Text>
          </View>
          {hp && (
            <View style={styles.containerHp}>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                HP: {hp}
              </Text>
              <Image style={styles.image} source={srcEnergy} />
            </View>
          )}
          {abilities && (
            <>
              <View>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                  Abilities:
                </Text>
                <Text style={[styles.text, {fontWeight: 'bold'}]}>
                  {abilities[0].name}
                </Text>
                <Text style={[styles.text, {fontStyle: 'italic'}]}>
                  {abilities[0].text}
                </Text>
              </View>
            </>
          )}
          {attacks && (
            <View>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                Attacks
              </Text>
              {attacks.map((e, index) => (
                <View key={index}>
                  <View style={styles.containerHp}>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                      {e.name}
                    </Text>

                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                      {e.damage}
                    </Text>
                  </View>
                  {e.text ? (
                    <View>
                      <Text style={[styles.text, {fontStyle: 'italic'}]}>
                        {e.text}
                      </Text>
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          )}
          {weaknesses && (
            <View>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                Weaknesses
              </Text>
              {weaknesses.map((e, index) => (
                <View style={styles.containerHp} key={index}>
                  <Text style={[styles.text, {fontStyle: 'italic'}]}>
                    {e.type}
                  </Text>
                  <Text style={[styles.text, {fontStyle: 'italic'}]}>
                    {e.value}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {retreatCost && (
            <>
              <View>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
                  Retreat Cost
                </Text>
              </View>
              <View style={styles.containerHp}>
                <Text style={[styles.text, {fontStyle: 'italic'}]}>
                  {retreatCost[0]}
                </Text>
                <Text style={[styles.text, {fontStyle: 'italic'}]}>
                  x{retreatCost.length}
                </Text>
              </View>
            </>
          )}
        </View>
      </>
    );
  }
}

export default Info;
