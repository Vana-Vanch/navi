import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
const Home = () => {
  return (
    <View>
      <Text>Home Page abc</Text>

      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </View>
  );
};

export default Home;
