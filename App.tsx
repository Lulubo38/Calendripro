import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon, SearchBar } from 'react-native-elements';
import FavoriteModal from './components/FavoriteModal';

const MapScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = () => {
    // Make API call to search for location
  };

  const handleAddFavorite = (title, address, latitude, longitude) => {
    const newFavorite = { title, address, latitude, longitude };
    setFavorites([...favorites, newFavorite]);
    setModalVisible(false);
  };

  const handleGoBack = () => {
    // Code to go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} onRegionChangeComplete={setRegion}>
        {favorites.map((favorite) => (
          <Marker key={favorite.title} coordinate={{ latitude: favorite.latitude, longitude: favorite.longitude }} />
        ))}
      </MapView>
      <SearchBar
        placeholder="Search"
        onChange={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        platform="ios"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
        cancelButtonProps={{ buttonStyle: styles.searchBarCancelButton }}
      />
      <View style={styles.addButtonContainer}>
        <Icon
          name="add"
          type="material"
          color="#fff"
          size={24}
          onPress={() => setModalVisible(true)}
          containerStyle={styles.addButton}
        />
      </View>
      <Icon
        name="arrow-back"
        type="material"
        color="red"
        size={24}
        onPress={handleGoBack}
        containerStyle={styles.backButton}
      />
      <FavoriteModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} onAddFavorite={handleAddFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  searchBarInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  searchBarCancelButton: {
    backgroundColor: 'transparent',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
