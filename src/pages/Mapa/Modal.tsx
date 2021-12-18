import React from 'react';
import { StyleSheet, View, Dimensions, Alert, Text, Image, TextInput, ScrollView } from 'react-native';


export default function Modal() {
    return (
      <View style={styles.container}>

          <View style={styles.info}>
            <Text style={styles.linha}><Text style={styles.ident}>Cor: </Text>Preta</Text>
            <Text style={styles.linha}><Text style={styles.ident}>Raça: </Text>Nao identificada</Text>
            <Text style={styles.linha}><Text style={styles.ident}>Porte: </Text>Grande</Text>
            <Text style={styles.linha}><Text style={styles.ident}>Esta ferido: </Text>Nao</Text>
            
          </View>

          <View style={styles.photo}>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width: "100%", height: "100%"}} />
          </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
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