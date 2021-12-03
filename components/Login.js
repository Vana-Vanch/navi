import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async () => {
    console.log(email);
    console.log(password);
    const userdat = {
      email,
      password,
    };
    const response = await axios.post(
      'http://192.168.43.244:8000/api/login',
      userdat,
    );

    console.log(response.data);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.text}
        onChangeText={e => setEmail(e)}
        placeholder="Email"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.text}
        onChangeText={e => setPassword(e)}
        placeholder="Password"
      />
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  text: {
    margin: 10,
    height: 40,
    width: '70%',
    borderWidth: 1,
    color: 'black',
  },
  heading: {
    fontSize: 20,
  },
});

export default Login;
