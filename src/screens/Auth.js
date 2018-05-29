import React from "react";
import { StyleSheet, Text,} from "react-native";
import {
    Container, 
} from 'native-base'; 

const Auth = props => {
    return ( 
        <Container style={styles.container}>
            <Text style={styles.title}> Auth Screen </Text>
        </Container>
    );
};

const styles = StyleSheet.create({ 

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'teal',
    },
   
    title: {
        fontSize: 40, 
        textAlign: "center",
        fontWeight: "400",
        color: '#fff',  
    },
    
    btnStyles: {
        width: 80,
        padding: 10, 
        borderRadius: 20,
        marginHorizontal: 10, 
        backgroundColor: "#00b386",  
        alignItems: "center"
    },

    textStyle: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Auth;
