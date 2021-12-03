import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import axios from 'axios';
const Booking = ({navigation, route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');

  var datas = route.params;
  var title = datas.title;
  var prize = String(datas.price);
  const resortName = title;
  const price = datas.price;
  const bookResort = async () => {
    const bookingData = {
      resortName,
      name,
      date,
      price,
      contact,
    };
    const response = await axios.post(
      'http://192.168.43.244:8000/api/booking',
      bookingData,
    );
    console.log(response.data);
    setContact('');
    setName('');
    setDate('');
    onRefresh();
  };
  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Booking</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name </Text>
        <TextInput style={styles.text} onChangeText={e => setName(e)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact </Text>
        <TextInput style={styles.text} onChangeText={e => setContact(e)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date </Text>
        <TextInput style={styles.text} onChangeText={e => setDate(e)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Resort </Text>
        <TextInput style={styles.text} value={title} editable={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price </Text>
        <TextInput style={styles.text} value={prize} editable={false} />
      </View>
      <Button title="Book" onPress={bookResort} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  headingText: {
    fontSize: 30,
  },
  text: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    color: 'black',
  },
  inputContainer: {
    margin: 30,
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
  },
});

export default Booking;
