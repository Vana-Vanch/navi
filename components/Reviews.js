import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Reviews = ({body, name}) => {
  return (
    <View style={styles.theBody}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name} :</Text>
      </View>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    backgroundColor: '#E7F1FF',
    padding: 7,
  },
  nameText: {
    fontSize: 15,
  },
  theBody: {
    maxWidth: '80%',
    marginLeft: 35,
    borderBottomWidth: 3,
    margin: 5,
    padding: 3,
  },
});

export default Reviews;
