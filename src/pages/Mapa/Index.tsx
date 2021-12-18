import React,{useState} from 'react';
import { StyleSheet, View, Dimensions, Alert, Text, Image, Button, TextInput } from 'react-native';

import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from './Modal';
import quit from '../../assets/quit.png';
import * as Location from "expo-location";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -16.695082733423124;
const LONGITUDE = -49.10356191632114;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

const initialRegion = {
  latitude: 49.2576508,
  longitude: -123.2639868,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};


export default function Mapa() {

  const [region, setRegion] = useState();
  const [detal, setDetal] = useState(false);
  const [marker, setMarker] = useState(false);
  const [markerLocation, setMarkerLocation] = useState({lat:0, long:0});
  const [isSaved, setIsSaved] = useState(true);

  const getCurrentPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();
  
    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
    }
  
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
  
    setRegion({ latitude, longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121 });
    //setMarkerLocation({ lat:latitude, long:longitude})
  };

  
  return (
    <View style={styles.container}>
      
      <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       userInterfaceStyle={'dark'}
       showsUserLocation={true}
       region={region}
       initialRegion={initialRegion}
       onPress={(e) => {
         setMarkerLocation({lat:e.nativeEvent.coordinate.latitude, long: e.nativeEvent.coordinate.longitude})
         setDetal(false)
        }}
       onLongPress={() => setMarker(true)}
        >
          { marker && <Marker
            image={quit}
            coordinate={{latitude:markerLocation.lat, longitude:markerLocation.long}}
            onSelect={e => log('onSelect', e)}
            onDrag={e => log('onDrag', e)}
            onDragStart={e => log('onDragStart', e)}
            onDragEnd={() => setDetal(true)}
            onPress={e => {
              setDetal(true)
              log('onPress', e)
              //Alert.alert(e.nativeEvent.coordinate.latitude.toString()+" "+e.nativeEvent.coordinate.longitude)
            }}
            draggable
            />
          }
      </MapView>
      {detal && <View style={styles.containerModal}>
        <View style={styles.info}>
          <Text style={styles.ident}>Cor: </Text>
          <TextInput></TextInput>
          <Text style={styles.linha}><Text style={styles.ident}>Porte: </Text>Grande</Text>
          <TextInput></TextInput>
          <Text style={styles.linha}><Text style={styles.ident}>Esta ferido: </Text>Nao</Text>
          <Button title='Save' ></Button>
        </View>

        <View style={styles.photo}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{width: "100%", height: "100%"}} />
        </View>

        </View>}
      </View>
  );  
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    containerModal: {
      backgroundColor: "#fff",
      position: "absolute",
      height: "40%", 
      width: "100%",
      flex: 1,
      padding: 10,
      flexDirection: "row",
      flexWrap: "wrap",
      borderStyle: "solid",
      borderColor: "#ddd",
      borderWidth: 3,
  },
  info: {
      
      flex: 2,
      width: "50%"
  },
  photo: {
      flex: 2,
      width: "50%",
      borderStyle: "solid",
      borderColor: "#ddd",
      borderWidth: 3,
  },
  ident: {
      fontWeight: "bold"
  },
  linha: {
      paddingBottom: 10
  }
  });
