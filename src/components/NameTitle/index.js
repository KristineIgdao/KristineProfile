import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NameTitle = ({ isDarkMode }) => {
  return (
    <Text style={[styles.nameTitle, isDarkMode ? styles.darkText : styles.lightText]}>
      Kristine Igdao
    </Text>
  );
};

const styles = StyleSheet.create({
  nameTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
   
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default NameTitle;
