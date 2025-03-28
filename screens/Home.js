import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from Expo

// Import the local images
import UserImage from '../assets/image/avt_1.jpg';
import Borgerimg from '../assets/image/borger.png';
import BurgerImage from '../assets/image/borger2.png';
import PizzaImage from '../assets/image/bizza.png';
import PopularItemsList from '../components/FlatlistComponent2'; // Import the flatlist component

const DATA = [
  {
    id: '1',
    title: 'Burger',
    image: BurgerImage,
  },
  {
    id: '2',
    title: 'Pizza',
    image: PizzaImage,
  },
];

// Define button data
const BUTTONS = [
  { id: 'Pizza', icon: 'local-pizza', label: 'Pizza' },
  { id: 'Burger', icon: 'fastfood', label: 'Burger' },
  { id: 'Drink', icon: 'local-drink', label: 'Drink' },
  { id: 'Rice', icon: 'rice-bowl', label: 'Rice' },
];

const Home = ({ navigation }) => {

  const [selectedButton, setSelectedButton] = useState('Pizza'); // Default selected button

  const handleButtonPress = (button) => {
    setSelectedButton(button); // Update the selected button
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <LinearGradient
        colors={['#FFFFFF','rgb(243, 250, 214)']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={UserImage} style={styles.userImage} />
          <View style={styles.userInfo}>
            <Text style={styles.locationText}>Your Location</Text>
            <View style={styles.locationRow}>
              <Icon name="location-on" size={16} color="#4A43EC" />
              <Text style={styles.location}>Savar, Dhaka</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellIconContainer}>
            <Icon name="notifications" size={20} color="#4A43EC" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your food"
            placeholderTextColor="#FFFFFF"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-list" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <FlatList
          data={BUTTONS}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === item.id && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress(item.id)}
            >
              <Icon
                name={item.icon}
                size={30}
                color={selectedButton === item.id ? '#FFFFFF' : '#333'}
              />
              <Text
                style={[
                  styles.label,
                  selectedButton === item.id && styles.selectedLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Promotional Section */}
      <View style={styles.promoContainer}>
        <Image source={Borgerimg} style={styles.promoImage} />

      </View>

      {/* Popular Items Section */}
      <View style={styles.popularHeader}>
        <Text style={styles.exploreText}>Popular items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.popularItem}
            onPress={() => navigation.navigate('Cart')} // Navigate to the Cart screen
          >
            <Image source={item.image} style={styles.popularItemImage} />
            <Text style={styles.popularItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
  header: {
    backgroundColor: '#FFF8E1',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    paddingBottom: 60, // Extra space for the search bar
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#777',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  bellIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A43EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    position: 'absolute',
    bottom: -25,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A43EC',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  buttonsContainer: {
    marginTop: 40,
    gap:20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  selectedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(112, 243, 134)',
    borderRadius: 10,
    width: 90,
    height: 90,
  },
  selectedLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#rgb(148, 148, 148)',
    borderRadius: 10,
    width: 90,
    height: 90,
    margin:5,
  },
  label: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  promoImage: {
    width: "100%",
    borderRadius: 10,
  },
  promoDetails: {
    flex: 1,
    marginLeft: 10,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 5,
  },
  discountBadge: {
    backgroundColor: '#4A43EC',
    borderRadius: 5,
    padding: 5,
  },
  discountText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#4A43EC',
  },
  popularItem: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    width: 180,
  },
  popularItemImage: {
    width: 180,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  popularItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Home;