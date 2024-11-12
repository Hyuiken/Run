import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require("../../assets/icons/sukuna.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>Hello, Sukuna.</Text>
      </View>

      <Link href="/home" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>
      <Link href="/workouts" style={styles.link}>
        <Text style={styles.linkText}>Workouts</Text>
      </Link>
      <Link href="/exercise" style={styles.link}>
        <Text style={styles.linkText}>Exercise Library</Text>
      </Link>
      <Link href="/create" style={styles.link}>
        <Text style={styles.linkText}>Create Workout</Text>
      </Link>
      <Link href="/progress" style={styles.link}>
        <Text style={styles.linkText}>Progress</Text>
      </Link>
      <Link href="/settings" style={styles.link}>
        <Text style={styles.linkText}>Settings</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  profileContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Centers items vertically
    marginBottom: 30, // Space below the profile section
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
  link: {
    backgroundColor: '#4B5563',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
