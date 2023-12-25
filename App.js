
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Modal } from 'react-native';
import Drink from './components/Drinks.js';
//import

export default function App() {
  const [drinkName, setDrinkName] = useState('');
  const [drinkVolume, setDrinkVolume] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();
    const newDrink = `${drinkName} ${drinkVolume}`; // Remove the '-' and 'ml'
    setTaskItems([...taskItems, newDrink]);
    setDrinkName('');
    setDrinkVolume('');
    setIsAddMode(false);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  
      return(
        <View style={styles.container}>

              <View style={styles.DrinkWrapper}>
                <Text style={styles.sectionTitle}> Daily Gulp</Text>
                <View style={styles.items}>{taskItems.map((item,index )=>(
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Drink text={item} />
                  </TouchableOpacity>
                
                ))}</View>
            </View>
            

          
          <TouchableOpacity onPress={() => console.log('Button pressed')} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
           </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.roundButton} onPress={() => setIsAddMode(true)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Modal 
          visible={isAddMode} 
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsAddMode(false)}
          >
            <View style={styles.modalContainer}>
              <View style = {styles.modalView}>
                <TextInput
                style={styles.input}
                placeholder={'Drink Name'}
                value={drinkName}
                onChangeText={(text)=> setDrinkName(text)}/>
                <TextInput
                style={styles.input}
                placeholder={'Volume (ml)'}
                keyboardType={'numeric'}
                value={drinkVolume}
                onChangeText={(text) => setDrinkVolume(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()} style={styles.addWrapper}>
                  <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
                
              </View>

            </View>


          </Modal>
          
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  DrinkWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addWrapper:{
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30,
    backgroundColor: '#ff5722',
    marginBottom: 30,
    left: 0,
  },
  addText:{
    color: 'white',
    fontSize: 16,
  },
  modalView:{
    backgroundColor: 'lightgrey',
    padding: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '105%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 150,
    marginBottom: 30,

  },

});