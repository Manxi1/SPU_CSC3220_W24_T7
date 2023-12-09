import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.changefont}>Tracking</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.roundButton,
            isButtonPressed ? styles.buttonPressed : styles.buttonNotPressed,
          ]}
          onPressIn={() => setIsButtonPressed(true)}
          onPressOut={() => setIsButtonPressed(false)}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// ... rest of your code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:50,
  },
  changefont:{
    fontFamily: 'Roboto',
    fontSize:30,
    fontWeight:'bold',
  },
  buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 76,
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#ff5722',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    
  },
  menuButton: {
    position: 'absolute',
    top: 48,
    left: 20,
  },
  
  menuText: {
    fontSize: 30,
    color: '#000',
  },
  buttonPressed: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  buttonNotPressed: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
