import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {TextInput} from 'react-native-gesture-handler';
import Reviews from './Reviews';

const ScreenB = ({navigation, route}) => {
  const [resort, setResort] = useState([]);
  const [locations, setLocations] = useState([]);
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onPressHandler = () => {
    navigation.goBack();
  };

  const onRefresh = () => {
    setRefreshing(true);
    getOne();
    setRefreshing(false);
  };

  const item = route.params;

  useEffect(() => {
    getOne();
  }, []);
  const getOne = async () => {
    const response = await axios.get(
      'http://192.168.43.244:8000/api/resorts/' + item.id,
    );
    setResort(response.data.resort);
    setLocations(response.data.locations[0].location);
    setImages(response.data.images);
    setReviews(response.data.reviews);
  };

  const addReviews = async () => {
    const resortId = item.id;
    const body = comment;
    const comments = {
      body,
      resortId,
    };
    const response = await axios.post(
      'http://192.168.43.244:8000/api/review',
      comments,
    );
    setComment('');
    onRefresh();
    console.log(response.data);
  };

  // const loc = locations[0].location;
  console.log(reviews);
  const lattitude = locations[0];
  const longitude = locations[1];

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Image
        style={styles.img}
        source={{
          uri: 'http://192.168.43.244:8000/images/resorts/' + resort.display,
        }}
      />
      <View>
        <Text style={styles.text1}>{resort.title}</Text>
        <Text style={styles.text2}>Contact : {resort.contact}</Text>
        <Text style={styles.text2}>Price : {resort.price}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.zeButtons}
            onPress={() => {
              navigation.navigate('Booking', {
                title: resort.title,
                price: resort.price,
              });
            }}>
            <Text>Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zeButtons}
            onPress={() => {
              navigation.navigate('Map', {lat: lattitude, lng: longitude});
            }}>
            <Text>Location</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.heading}>
          <Text style={styles.heading}> Galleries </Text>
        </View>
        {images.map(image => {
          return (
            <Image
              style={styles.groupImg}
              key={image.path}
              source={{
                uri: 'http://192.168.43.244:8000' + image.path,
              }}
            />
          );
        })}
      </View>
      <View>
        <View>
          <View style={styles.heading}>
            <Text style={styles.heading}>Reviews</Text>
          </View>
          {reviews.map(review => {
            return (
              <Reviews body={review.body} key={review.id} name={review.name} />
            );
          })}
        </View>
        <View style={styles.reviewContainer}>
          <TextInput
            style={styles.text}
            value={comment}
            onChangeText={e => setComment(e)}
          />
          <Button title="Comment" onPress={addReviews} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 30,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 5,
  },
  text2: {
    fontSize: 20,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 5,
  },
  img: {
    width: '100%',
    height: 200,
  },
  groupImg: {
    margin: 10,
    width: '80%',
    height: 300,
    marginLeft: 35,
  },
  heading: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  reviewContainer: {
    flex: 1,
    justifyContent: 'space-around',
    maxWidth: '80%',
    borderWidth: 1,
    marginLeft: 35,
    marginTop: 20,
  },
  text: {
    margin: 10,

    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  zeButtons: {
    alignItems: 'center',
    backgroundColor: '#0A95FF',
    padding: 10,
    width: '40%',
    height: 50,
  },
});

export default ScreenB;
