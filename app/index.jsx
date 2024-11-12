import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';  // Import the useRouter hook
import Button from '../app/components/custombutton';  // Custom button component

export default function App() {
  const router = useRouter();  // Initialize the router

  // Handle navigation to the Login screen
  const handleGoToLogin = () => {
    console.log('Navigating to Login screen...');
    router.push('/login');  // Navigates to the Login screen (app/login.jsx)
  };

  // Handle navigation to the Signup screen
  const handleGoToSignup = () => {
    console.log('Navigating to Signup screen...');
    router.push('/signup');  // Navigates to the Signup screen (app/signup.jsx)
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/runner.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>to</Text>
      <Text style={styles.title}>Run'It</Text>
      
      {/* Button for Login */}
      <Button title="Go to Login" onPress={handleGoToLogin} />

      {/* Button for Signup */}
      <Button title="Go to Signup" onPress={handleGoToSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginVertical: 5,
  },
});
