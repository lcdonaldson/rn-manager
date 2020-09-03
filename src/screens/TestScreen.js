import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import Loader from '../components/common/Loader/Loader';

const TestScreen = props => (
    // goTo = () => {
    //     this.props.navigation.navigate('Home');
    // }
    
    <Container style={styles.container}>
        <Content>
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
