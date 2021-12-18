import React, {useState} from "react";


import { 
    View, 
    StyleSheet, 
    Text, 
    ScrollView, 
    TextInput, 
    Button,
    SafeAreaView,
    Alert
} from "react-native";


export default function Login(props) {
    return(
        <View style={styles.root}>
            <View style={styles.logo}>
                <Text>
                    Logo
                </Text>
            </View>
            <SafeAreaView style={styles.Arealogin} >
                <Text >Usuario</Text>
                <TextInput 
                    textAlign="center"  
                    keyboardType="email-address"
                    style={styles.InpuTexts}
                />
                <Text >Senha</Text>
                <TextInput 
                    //placeholder="Your password..." 
                    textAlign="center" 
                    secureTextEntry
                    textContentType="password"
                    style={styles.InpuTexts}
                />
                <View style={{paddingTop: 20}}>
                    <Button title="entrar" onPress={() => "Click"}></Button>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#aaf",
        width: "100%",
        height: "100%",        
      },
    logo: {
        flex: 3,
        height: "50%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    Arealogin: {
        flex: 3,
        height: "50%",
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    InpuTexts: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        width: 180,
        height: 38,
        borderRadius: 5,
    },
 
     
});
