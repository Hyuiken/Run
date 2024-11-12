import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const exercises = [
  { key: '1', value: 'Squats' },
  { key: '2', value: 'Push-ups' },
  { key: '3', value: 'Lunges' },
];

const Workouts = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleCreateWorkout = () => {
    // Handle workout creation logic here
    console.log('Workout Created:', workoutName, selectedExercises);
  };

  return (
    <ScrollView className='p-4'>
      <Text className='text-xl font-bold'>Workouts</Text>
      
      <View className='mt-4'>
        <Text className='text-lg font-semibold'>Exercise Library</Text>
        <View className='mt-2'>
          <Text className='text-base'>- Squats</Text>
          <Text className='text-base'>- Push-ups</Text>
          <Text className='text-base'>- Lunges</Text>
        </View>
      </View>
      
      <View className='mt-4'>
        <Text className='text-lg font-semibold'>Create Workout</Text>
        
        <TextInput 
          placeholder="Workout Name"
          value={workoutName}
          onChangeText={setWorkoutName}
          className='border p-2 mt-2'
        />
        
        <Text className='mt-4'>Exercises:</Text>
        <SelectList 
          setSelected={setSelectedExercises}
          data={exercises}
          save="value"
          multiple={true}
          placeholder="Select Exercises"
          className='border mt-2'
        />
        
        <Button 
          title="Create Workout" 
          onPress={handleCreateWorkout} 
        />
      </View>
    </ScrollView>
  );
};

export default Workouts;