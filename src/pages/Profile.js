import React from 'react';
import { StyleSheet, View } from 'react-native';
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';
import Typography from '../components/Typography';

const Profile = ({ isDarkMode }) => {
  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      {/* Avatar */}
      <Avatar />
      
      {/* Name Title */}
      <NameTitle isDarkMode={isDarkMode} />
      
      {/* Additional Info (example: Socials) */}
      <Typography text="FB: Kristine" isDarkMode={isDarkMode} />
      <Typography text="Insta: @kristine" isDarkMode={isDarkMode} />
      <Typography text="Contact #: +123456789" isDarkMode={isDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  lightBackground: {
    backgroundColor: '#f0f0f0',
  },
  darkBackground: {
    backgroundColor: '#333',
  },
});

export default Profile;
