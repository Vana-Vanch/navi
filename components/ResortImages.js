import React, {useState} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native-gesture-handler';

const ResortImages = ({allimages}) => {
  return (
    <ScrollView>
      {allimages.map(oneimage => {
        return (
          <Image
            source={{
              uri: 'http://192.168.43.244:8000/' + oneimage.path,
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 150,
  },
});

export default ResortImages;
