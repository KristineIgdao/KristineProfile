import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Typography = ({ text, isDarkMode, style }) => {
  return (
    <Text style={[styles.typography, isDarkMode ? styles.darkText : styles.lightText, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  typography: {
    fontSize: 16,
    textAlign: 'center', 
    marginVertical: 2,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default Typography;
