import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CreateWorkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Workout</Text>
      
      <Text style={styles.label}>Workout Name:</Text>
      <Text style={styles.inputPlaceholder}>e.g., Full Body Workout</Text>

      <Text style={styles.label}>Workout Type:</Text>
      <Text style={styles.inputPlaceholder}>e.g., Cardio, Strength</Text>

      <Text style={styles.label}>Duration:</Text>
      <Text style={styles.inputPlaceholder}>e.g., 30 minutes</Text>

      <Text style={styles.label}>Additional Notes:</Text>
      <Text style={styles.inputPlaceholder}>e.g., Focus on form, include warm-up</Text>

      <Text style={styles.submitButton}>[Create Workout]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginTop: 15,
    color: '#555',
  },
  inputPlaceholder: {
    fontSize: 16,
    marginBottom: 10,
    color: '#aaa',
    fontStyle: 'italic',
  },
  submitButton: {
    marginTop: 20,
    fontSize: 18,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default CreateWorkout;
