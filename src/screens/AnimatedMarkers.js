import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
  Linking,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import ImagePicker from 'react-native-image-crop-picker';
import NormalButtons from '../components/NormalButtons';
import UploadBotton from '../components/FAB';

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 22.62938671242907;
const LONGITUDE = 88.4354486029795;
// latitudeDelta: 0.04864195044303443,
// longitudeDelta: 0.040142817690068,

const AnimatedMarkers = props => {
  const [latitude, setLatitude] = React.useState(LATITUDE);
  const [longitude, setLongitude] = React.useState(LONGITUDE);
  const [routeCoordinates, setRouteCoordinates] = React.useState([]);
  const [distanceTravelled, setDistanceTravelled] = React.useState(0);
  const [prevLatLng, setPrevLatLng] = React.useState({});
  const [coordinate, setCoordinate] = React.useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  var watchID;

  const marker = React.useRef(null);
  const mapRef = React.useRef(null);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(`Turn on Location Services to determine your location.`, '', [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ]);
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    watchID = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(position.coords);
        const newCoordinate = {
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        mapRef.current.animateToRegion(newCoordinate, 3000);
        if (Platform.OS === 'android') {
          if (marker) {
            marker.current.animateMarkerToCoordinate(newCoordinate, 500);
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        setLatitude(latitude);
        setLongitude(longitude);
        setRouteCoordinates(routeCoordinates.concat([newCoordinate]));
        setDistanceTravelled(distanceTravelled + calcDistance(newCoordinate));
        setPrevLatLng(newCoordinate);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );
  };

  useEffect(() => {
    getLocation();

    return () => {
      Geolocation.clearWatch(watchID);
      ImagePicker.clean()
        .then(() => {
          console.log('removed all tmp images from tmp directory');
        })
        .catch(e => {
          // alert(e);
        });
    };
  }, []);

  const getMapRegion = () => ({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const calcDistance = newLatLng => {
    return haversine(prevLatLng, newLatLng) || 0;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        showUserLocation
        followUserLocation
        loadingEnabled
        region={coordinate}>
        <Polyline coordinates={routeCoordinates} strokeWidth={5} />
        <Marker ref={marker} coordinate={coordinate} />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(distanceTravelled).toFixed(2)} km
          </Text>
        </TouchableOpacity>
        {/* <NormalButtons /> */}
      </View>
      <UploadBotton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    // flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    // marginVertical: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
  },
  bottomBarContent: {
    fontSize: 20,
    color: '#000',
    // fontWeight: 'bold',
    // fontFamily: 'Poppins-Bold',
  },
});

export default AnimatedMarkers;
