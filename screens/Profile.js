import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from Expo
import UserImage from '../assets/image/avt_1.jpg'; // Import the avatar image
import { FlatList } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <LinearGradient
        colors={['#FFFFFF','rgb(243, 250, 214)']}
        style={styles.topSection}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Profile</Text>
          <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
        </View>
      </LinearGradient>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={UserImage} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <LinearGradient
        colors={['rgb(243, 250, 214)','#FFFFFF']}
        style={styles.bottomSection}
      >
        <Text style={styles.name}>Rakibul Hasan</Text>
        <Text style={styles.email}>rakibhbrand@gmail.com</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Icon name="home" size={24} color="#333" />
            <Text style={styles.optionLabel}>Home</Text>
            <Icon name="chevron-right" size={24} color="#333" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Icon name="credit-card" size={24} color="#333" />
            <Text style={styles.optionLabel}>My Card</Text>
            <Icon name="chevron-right" size={24} color="#333" style={styles.arrowIcon} />
          </TouchableOpacity>

          <View style={styles.optionButton}>
            <Icon name="nightlight-round" size={24} color="#333" />
            <Text style={styles.optionLabel}>Dark Mood</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              thumbColor={isDarkMode ? '#4A43EC' : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>

          <TouchableOpacity style={styles.optionButton}>
            <Icon name="local-shipping" size={24} color="#333" />
            <Text style={styles.optionLabel}>Track Your Order</Text>
            <Icon name="chevron-right" size={24} color="#333" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Icon name="settings" size={24} color="#333" />
            <Text style={styles.optionLabel}>Settings</Text>
            <Icon name="chevron-right" size={24} color="#333" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Icon name="help-outline" size={24} color="#333" />
            <Text style={styles.optionLabel}>Help Center</Text>
            <Icon name="chevron-right" size={24} color="#333" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
          <Icon name="logout" size={20} color="#FFFFFF" style={styles.logoutIcon} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  topSection: {
    flex: 0.25, // 25% of the screen
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  avatarContainer: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: [{ translateX: -70 }, { translateY: -50 }], // Center horizontally and adjust vertically
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Add shadow for Android
    zIndex: 10, // Ensure the avatar is above other views
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#4A43EC',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 0.75, // 75% of the screen
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: 30, // Space between the two views
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionsContainer: {
    marginVertical: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  logoutButton: {
    backgroundColor: '#4A43EC',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Align text and icon horizontally
    marginHorizontal: 20, // Add horizontal padding
    marginBottom: 20, // Ensure spacing from the bottom
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10, // Add spacing between text and icon
  },
  logoutIcon: {
    marginLeft: 5,
  },
});

export default Profile;