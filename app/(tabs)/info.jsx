import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require("../../assets/icons/sukuna.png")} // Adjust the path if necessary
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>Hello, Sukuna.</Text>
      </View>

      <Text style={styles.title}>Info</Text>
      <Text style={styles.description}>Run'It is a free fitness app</Text>
      <Text style={styles.description}>An app that is free and easy to use</Text>
      <Text style={styles.description}>Can be used by Everyone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-start', // Aligns items to the top
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Centers the items vertically
    marginBottom: 30, // Space below the profile section
    position: 'absolute', // Allows placement at the top
    top: 20, // Position from the top
    left: 20, // Position from the left
  },
  profileButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    elevation: 3,
    marginRight: 10, // Space between the image and the name
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    marginTop: 100, // Adjusted to create space for the profile section
  },
  description: {
    fontSize: 18,
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
});

export default Info;
