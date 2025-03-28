import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import FlatListComponent from './FlatListComponent';

const FlatListComponent2 = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal // Display items in a row
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'left',
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  itemTitle: {
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});

export default FlatListComponent2;