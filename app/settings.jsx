import { View, Text, StyleSheet, Switch, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('Sukuna');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = () => {
    console.log('Settings saved:', { username, notificationsEnabled });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Enable Notifications:</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <Button title="Save Settings" onPress={handleSave} />
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
  settingItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
});

export default Settings;
