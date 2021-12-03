import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  ScrollView,
  Pressable,
  View,
  StyleSheet,
  Button,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import Card from './Card';

const ScreenA = ({navigation}) => {
  const [resorts, setResorts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getResort();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getResort();
    setRefreshing(false);
  };

  const getResort = async () => {
    const response = await axios.get('http://192.168.43.244:8000/api/resorts');
    setResorts(response.data);
    console.log(response.data);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Pressable onPress={getResort}>
        {resorts.map(resort => {
          return (
            <View key={resort.id}>
              <Card
                id={resort.id}
                title={resort.title}
                price={resort.price}
                display={resort.display}
              />
              <Button
                title="Detail"
                onPress={goToDetail => {
                  navigation.navigate('Screen_B', {id: resort.id});
                }}
              />
            </View>
          );
        })}
      </Pressable>
    </ScrollView>
  );
};

export default ScreenA;
