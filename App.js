import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import Profile from './src/pages/Profile';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleAnim = useRef(new Animated.Value(0)).current;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    Animated.timing(toggleAnim, {
      toValue: isDarkMode ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleBackgroundColor = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#555'],
  });

  const togglePosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], 
  });

  return (
    <View style={styles.appContainer}>
      <Profile isDarkMode={isDarkMode} />

      <View style={styles.darkModeContainer}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleContainer}>
          <Animated.View style={[styles.toggleBackground, { backgroundColor: toggleBackgroundColor }]}>
            <Animated.View style={[styles.toggleCircle, { left: togglePosition }]} />
          </Animated.View>
        </TouchableOpacity>
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
    marginTop: 10,
    padding: 10, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 20, 
  },
  darkModeText: {
    marginRight: 10,
    fontSize: 16,
  },
  toggleContainer: {
    width: 50,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 2,
  },
  toggleBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
  },
});

export default App;
