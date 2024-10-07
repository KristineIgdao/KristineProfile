import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Profile from './src/pages/Profile';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <View style={styles.appContainer}>
      {/* Profile Component */}
      <Profile isDarkMode={isDarkMode} />

      {/* Dark Mode Toggle */}
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeText: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default App;
