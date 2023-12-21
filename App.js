
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Drink from './components/Drinks';
import React from 'react';

export default function App() {
  
      return(
        <View style={styles.container}>
          <Text style={styles.changefont}>Tracking</Text>
          <TouchableOpacity onPress={() => console.log('Button pressed')} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
           </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.roundButton} onPress={() => console.log('Button pressed')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      );
}

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
    top: 50,
    left: 20,
  },
  
  menuText: {
    fontSize: 30,
    color: '#000',
    
  },
});