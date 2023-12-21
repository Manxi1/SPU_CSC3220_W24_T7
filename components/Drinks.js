import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Drink = () => {
  const [drinks, setDrinks] = useState([]);

  const addDrink = (drink) => {
    setDrinks(prevDrinks => [...prevDrinks, drink]);
  }
  const removeDrink = (drinkToRemove) => {
    setDrinks(prevDrinks => prevDrinks.filter(drink => drink !== drinkToRemove));
  }

  return (
    <View style={styles.container}>
      {drinks.map((drink, index) => (
        <View key={index} style={styles.drinkItem}>
          <Text style={styles.drinkText}>{drink}</Text>
          <Button title="Remove" onPress={() => removeDrink(drink)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  drinkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  drinkText: {
    fontSize: 18,
  },
});

export default Drink;
