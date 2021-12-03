/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Map from './components/Map';
import User from './components/User';
import Booking from './components/Booking';
import ScreenA from './components/ScreenA';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenB from './components/ScreenB';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#e6e6e6', width: 250}}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name="Home"
        component={ScreenA}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="User" component={User} />

      <Stack.Screen name="Register" component={Register} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default App;
