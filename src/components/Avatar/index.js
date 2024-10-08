import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/kristine.jpg')} 
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
    borderColor: '#F1F0E8', 
    borderRadius: 190,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 180,
    marginLeft: 180,
    marginBottom: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 375,
  },
});

export default Avatar;