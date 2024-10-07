import React from 'react';
import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';
import Typography from '../components/Typography';

const Profile = ({ isDarkMode }) => {

  // Open Facebook URL
  const openFacebook = () => {
    const facebookUrl = 'https://www.facebook.com/kristeneigdao143';
    Linking.openURL(facebookUrl).catch(err => console.error("Couldn't open the URL", err));
  };

  // Open Instagram URL
  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/_krestinne/';
    Linking.openURL(instagramUrl).catch(err => console.error("Couldn't open the URL", err));
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      {/* Avatar */}
      <Avatar />
      
      {/* Name Title */}
      <NameTitle isDarkMode={isDarkMode} />
      
      {/* Additional Info (JOINED info with Icon) */}
      <View style={styles.row}>
        <Icon name="calendar" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Typography text=" JOINED: 1 year ago" isDarkMode={isDarkMode} style={styles.text} />
      </View>

      {/* Facebook and Instagram details with icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.row} onPress={openFacebook}>
          <Icon name="facebook" size={25} color={isDarkMode ? 'white' : 'black'} />
          <Typography text="Kristine G. Igdao" isDarkMode={isDarkMode} style={styles.textAligned} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={openInstagram}>
          <Icon name="instagram" size={25} color={isDarkMode ? 'white' : 'black'} />
          <Typography text="@krestinne" isDarkMode={isDarkMode} style={styles.textAligned} />
        </TouchableOpacity>
      </View>
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
  iconContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  textAligned: {
    marginLeft: 10, // Adds space between icon and text
    alignSelf: 'center', // Aligns text with the icon vertically
  },
  text: {
    marginLeft: 10, // Adds space between icon and text
  },
});

export default Profile;
