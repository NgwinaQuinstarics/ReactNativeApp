import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Joy', id: '1' },
    { name: 'Michael', id: '2' },
    { name: 'Sarah', id: '3' },
    { name: 'David', id: '4' },
    { name: 'Emma', id: '5' },
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  item: {
    padding: 30,
    marginTop: 20,
    backgroundColor: 'pink',
    fontSize: 24,
    borderRadius: 10,
  },
});