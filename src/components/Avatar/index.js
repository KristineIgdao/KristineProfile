import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/Logo.jpg')} // Adjust path accordingly
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
});

export default Avatar;
