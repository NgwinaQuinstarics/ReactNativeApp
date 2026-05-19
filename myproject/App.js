import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  // Default values (editable)
  const [people, setPeople] = useState([ 
    {name: "joy", key: 3}, 
    {name: "michael", key: 4},
    {name: "sarah", key: 5},
    {name: "david", key: 6},
    {name: "emma", key: 7},
    {name: "oliver", key: 8},
    {name: "ava", key: 9},
    {name: "william", key: 10},
     
  ]);
  

  return (
    <View style={styles.container}>

    <ScrollView>
      
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 2,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 220,
    borderRadius: 8
  },

  result: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    width: 250
  },

  resultText: {
    fontSize: 18,
    marginBottom: 5
  }
});