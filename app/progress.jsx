import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

// Sample data for recent workouts
const recentWorkouts = [
  { id: '1', name: 'Full Body Workout', duration: '45 mins', date: '2024-10-01' },
  { id: '2', name: 'Cardio Session', duration: '30 mins', date: '2024-10-03' },
  { id: '3', name: 'Leg Day', duration: '40 mins', date: '2024-10-05' },
];

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Progress</Text>
      
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Total Workouts: {recentWorkouts.length}</Text>
        <Text style={styles.stat}>Total Duration: {calculateTotalDuration(recentWorkouts)} mins</Text>
      </View>
      
      <Text style={styles.subtitle}>Recent Workouts:</Text>
      <FlatList
        data={recentWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.workoutName}>{item.name}</Text>
            <Text style={styles.workoutDetails}>{item.duration} - {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Function to calculate total duration from recent workouts
const calculateTotalDuration = (workouts) => {
  let total = 0;
  workouts.forEach(workout => {
    const duration = parseInt(workout.duration); // Assuming duration is a string like "45 mins"
    total += duration;
  });
  return total;
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
  statsContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  stat: {
    fontSize: 18,
    color: '#555',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  workoutItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutDetails: {
    fontSize: 14,
    color: '#777',
  },
});

export default Progress;
