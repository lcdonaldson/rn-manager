
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import Button from '../src/components/Button';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Card
} from "native-base";
import Home from '../src/screens/Home'

export default class App extends Component {
    render() {
        return (
            <Home />
            // <Container>
            //     <Header>
            //         <Left>
            //             <Button transparent>
            //                 <Icon name="menu" />
            //             </Button>
            //         </Left>
            //         <Body>
            //             <Title>Manager</Title>
            //         </Body>
            //         <Right>
            //             <Button transparent>
            //                 <Icon name="search" />
            //             </Button>
            //         </Right>
            //     </Header>

            //     <View style={styles.container}>
            //         <Text style={styles.welcome}>Welcome to React Native!</Text>
            //     </View>
            // </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
