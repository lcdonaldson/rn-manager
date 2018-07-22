import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content, Form, Item, Input, Button } from "native-base";
import Loader from '../components/common/Loader/Loader';

const Auth = props => (
    <Container style={styles.container}>
        <Content>
            <Text style={styles.title}> Auth Screen </Text>
            <Form>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item last>
                    <Input placeholder="Password" />
                </Item>
                <Button block primary onPress= "">
                    <Text>Submit</Text>
                </Button>
            </Form>
            <Loader />
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
        color: "#fff"
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
        color: "#fff",
        fontWeight: "bold"
    }
});

export default Auth;
