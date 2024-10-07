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
    width: 200,
    height: '30%',
    backgroundColor: '#f4f3f4',
    borderWidth:12,
    borderColor: 'fff', 
    borderRadius: 190,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginTop: -160,
    marginLeft: 180,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 375,
  },
});

export default Avatar;
