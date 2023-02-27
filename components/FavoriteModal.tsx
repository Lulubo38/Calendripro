import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const FavoriteModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    console.log('Title:', title);
    console.log('Address:', address);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Ajouter une adresse favorite</Text>
        <TextInput
          placeholder="Titre"
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Adresse"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.button}>Sauvegarder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default FavoriteModal;
