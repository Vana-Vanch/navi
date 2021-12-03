import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const Map = ({navigation, route}) => {
  var markers = route.params;
  console.log(markers);
  var lattitude = parseFloat(markers.lat);
  var longtitude = parseFloat(markers.lng);
  console.log(lattitude, longtitude);
  return (
    <View style={styles.body}>
      <Text>Map</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: lattitude,
          longitude: longtitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: lattitude, longitude: longtitude}}
          pinColor={'red'} // any color
          title={'title'}
          description={'description'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
