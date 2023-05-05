import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.imgUrl }} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.body}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 1,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
});
export default CarouselCardItem;