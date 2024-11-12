import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const exercises = [
  { id: '1', name: 'Squats', description: 'A lower body exercise that targets the thighs, hips, and buttocks.' },
  { id: '2', name: 'Push-ups', description: 'A basic exercise that works the upper body, primarily the chest, shoulders, and triceps.' },
  { id: '3', name: 'Lunges', description: 'A lower body exercise that strengthens the legs and glutes.' },
  { id: '4', name: 'Plank', description: 'A core strength exercise that involves maintaining a position similar to a push-up.' },
  { id: '5', name: 'Deadlift', description: 'A strength training exercise that works multiple muscle groups, primarily the back and legs.' },
];

const ExerciseLibrary = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => setSelectedExercise(item)}
    >
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Library</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {selectedExercise && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{selectedExercise.name}</Text>
          <Text style={styles.descriptionText}>{selectedExercise.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  buttonText: {
    fontSize: 18,
  },
  descriptionContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ExerciseLibrary;
