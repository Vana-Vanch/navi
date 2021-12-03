import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
const Card = ({id, title, price, display}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: 'http://192.168.43.244:8000/images/resorts/' + display,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 'auto',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  img: {
    height: 200,
    width: '100%',
  },
});

export default Card;
