import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

const User = () => {
  const [name, setName] = useState('');
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await axios.get('http://192.168.43.244:8000/api/user');
    console.log(response.data);
    setName(response.data.name);
    setLogged(true);
  };

  const logOutHandler = async () => {
    const response = await axios.post('http://192.168.43.244:8000/api/logout');
    setName('');
    setLogged(false);
    console.log(response.data);
  };
  return (
    <View>
      {logged ? (
        <Text>{'Welcome ' + name}</Text>
      ) : (
        <Text>{'Not Logged in'}</Text>
      )}

      {logged ? <Button title="log Out" onPress={logOutHandler} /> : null}
    </View>
  );
};

export default User;
