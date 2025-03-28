import React from 'react';
import { FlatList, Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';

const FlatListComponent = ({ data, keyExtractor, emptyMessage }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.rowContainer}>
        <Image source={item.image} style={styles.itemImage} />
          <View style={styles.fulliteminfo}>
            <View style={styles.iteminfo}>
              <Text style={styles.providername}>{item.provider}</Text>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>1</Text>
                    <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
  );
  

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor || ((item) => item.id.toString())}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{emptyMessage || "No data available"}</Text>
        </View>
      )}
      contentContainerStyle={data.length === 0 && styles.emptyListContent}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#F8F8FB',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row', // Row layout for the image and text
    alignItems: 'center', // Center the image and text vertically
  },
  emptyText: {
    color: 'gray',
    fontSize: 16,
  },
  emptyListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  price:
  {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iteminfo:
  {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  providername:
  {
    fontSize: 10,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  quantityButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
  },
  fulliteminfo: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Keep content spaced out horizontally
    alignItems: 'center', // Align content vertically
    flex: 1,
  },
  
});

export default FlatListComponent;