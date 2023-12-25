import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drink = (props) => {
        let [drink, volume] = props.text.split(' ');
    
        if (!volume) {
            // If there is no volume, consider the entire input as the drink name
            drink = props.text;
            volume = ''; // Set volume to an empty string
        }
    
        return (
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                    <View style={styles.square}>
                        <Icon name="trash-alt" size={24} color="#000000" />
                        </View>
                        <Text style={styles.itemText}>{drink}</Text>
                        {!!volume && <Text style={styles.itemText}> {volume}ml</Text>}
                    </View>
                    <View style={styles.circular}></View>
                </View>
            );
        };
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F5F5',
    padding: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    
    
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    
  },
  square: {
    width: 34, // Or whatever size you want
    height: 32, // Or whatever size you want
    backgroundColor: '#ADD8E6', // Or whatever color you want
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center',
    borderRadius: 9,
    paddingRight: 10,


  },
  itemText: {
    maxWidth: '90%',
    paddingRight: 17,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Drink;
