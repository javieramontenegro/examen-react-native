import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export class ButtonBack extends Component {
  render() {
    const navigations = useNavigation();
    const styles = StyleSheet.create({
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
    return (
      <TouchableOpacity
        onPress={() => {
          navigations.pop();
        }}
        style={styles.button}>
        <Text>Back</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonBack;
