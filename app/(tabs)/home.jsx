import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton} onPress={toggleProfile}>
          <Image
            source={require("../../assets/icons/sukuna.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>Hello, Sukuna.</Text>
      </View>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      
      <Text style={styles.welcomeText}>Welcome to Run'It!</Text>

      {showProfile && (
        <View style={styles.profileTab}>
          <Text style={styles.profileTabText}>Profile Details</Text>
          <Text style={styles.profileTabText}>Email: sukuna@malevolentshrine.com</Text>
          <Text style={styles.profileTabText}>Age: 21</Text>
          <Text style={styles.profileTabText}>Location: Tokyo</Text>
        </View>
      )}

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.goalText}>Fitness Goals:</Text>
        <Text style={styles.goalItem}>Goal 1: Run 3 times a week</Text>
        <Text style={styles.goalItem}>Goal 2: Do 10 push-ups every morning</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.workoutText}>Upcoming Workouts:</Text>
        <Text style={styles.workoutItem}>Monday: Chest and Triceps</Text>
        <Text style={styles.workoutItem}>Tuesday: Back and Biceps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
  },
  profileContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonPrimary: {
    top: 20,
    backgroundColor: '#4B5563',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#6B7280',
    padding: 15,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    alignItems: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
  profileTab: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-start',
    elevation: 3,
  },
  profileTabText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  goalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  goalItem: {
    color: '#ffffff',
    marginBottom: 5,
  },
  workoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  workoutItem: {
    color: '#ffffff',
    marginBottom: 5,
  },
});

export default Home;
