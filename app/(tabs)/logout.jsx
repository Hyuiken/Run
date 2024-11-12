import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing tokens, etc.
    console.log("User logged out");
    navigation.navigate('Login'); // Navigate to the login screen after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <Text style={styles.message}>Are you sure you want to log out?</Text>
      <Button title="Yes, Logout" onPress={handleLogout} color="#ff4d4d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
});

export default Logout;
