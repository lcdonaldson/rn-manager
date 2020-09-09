import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import Loader from '../components/common/Loader/Loader';

export const goTo = () => {
    let x = 2;
    let y = 3;
    let z = y + x

    return z;
}

const TestScreen = props => (
    
    <Container style={styles.container}>
        <Content>
            <TouchableOpacity onPress={() => goTo()}/>
            <Text style={styles.title}> Test Screen </Text>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "teal"
    },

    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "400",
        color: "#FFF"
    }
});

export default TestScreen;
