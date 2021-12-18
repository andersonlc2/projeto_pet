import React,{useState} from 'react';
import { StyleSheet, View, Dimensions, Alert, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import Mapa from "./pages/Mapa/Index";
import Login from "./pages/Login/Index";

export default function App() {
  
  const [authenticate, setAuth] = useState(true);

  return(
    <>
      <View style={styles.root}>
        {authenticate && <Mapa />}
        {!authenticate && <Login />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,

  }

});