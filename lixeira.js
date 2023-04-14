import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TrashCan = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.trashCan}>
    <AntDesign name="delete" size={24} color="white" />
  </TouchableOpacity>
);

const TrashableItem = ({ title, onDelete }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <TrashCan onPress={onDelete} />
  </View>
);

const Lixeira = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' }
  ]);

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TrashableItem
          key={item.id}
          title={item.title}
          onDelete={() => handleDeleteItem(item.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
  itemTitle: {
    fontSize: 18,
    marginRight: 16,
  },
  trashCan: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
});

export default Lixeira;