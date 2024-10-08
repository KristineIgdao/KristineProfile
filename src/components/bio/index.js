import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

const Bio = ({ isDarkMode }) => {
  const [bioText, setBioText] = useState('This is my bio.');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            style={[styles.textInput, isDarkMode ? styles.darkInput : styles.lightInput]} 
            value={bioText}
            onChangeText={setBioText}
            multiline
          />
        </View>
      ) : (
        <View style={styles.displayContainer}>
          <Text style={[styles.bioText, isDarkMode ? styles.darkText : styles.lightText]}>
            {bioText}
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Edit Bio</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  editContainer: {
    alignItems: 'center',
  },
  displayContainer: {
    alignItems: 'center',
    borderColor: 'gray',  
    borderWidth: 1,       
    padding: 15,          
    borderRadius: 8,      
    marginBottom: 20,     
  },
  bioText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#8B4513',  
  },
  textInput: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 8,      
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F1F0E8',  
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: '#000',  
    fontSize: 16,
    textAlign: 'center',
  },
  lightText: {
    color: '#000',  
  },
  darkText: {
    color: '#fff',  
  },
  lightInput: {
    borderColor: 'lightgray',
    backgroundColor: '#fff',   
  },
  darkInput: {
    borderColor: 'gray',       
    backgroundColor: '#333',   
  },
});

export default Bio;
