import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { Container, Grid, Row, Content, Card } from "native-base";
// import Home from '../src/screens/Home';
// import Auth from '../src/screens/Auth';

class HomeScreen extends React.Component {
    render() {
        return (
            // <Home/>
            <Container style={styles.container}>
                <Card transparent style={styles.card}>
                    <Grid>
                        <Text style={styles.title}>Manager</Text>
                        <Row style={styles.row}>
                            <TouchableOpacity
                                style={styles.btnStyles}
                                onPress={() =>
                                    this.props.navigation.navigate("Auth")
                                }
                            >
                                <Text style={styles.textStyle}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnStyles}
                                onPress={() =>
                                    this.props.navigation.navigate("SignUp")
                                }
                            >
                                <Text style={styles.textStyle}>Sign Up</Text>
                            </TouchableOpacity>
                        </Row>
                    </Grid>
                </Card>
            </Container>
        );
    }
}

class AuthScreen extends React.Component {
    render() {
        return (
            // <Auth/>
            <Container style={styles.container}>
                <Text style={styles.title}> Auth Screen </Text>
            </Container>
        );
    }
}

class SignUpScreen extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text style={styles.title}> Sign Up Screen </Text>
            </Container>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Auth: {
            screen: AuthScreen
        },
        SignUp: {
            screen: SignUpScreen
        }
    },
    {
        initialRouteName: "Home"
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "teal"
    },
    card: {
        maxHeight: 150,
        borderColor: "teal",
        backgroundColor: "transparent"
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "400",
        color: "#fff"
    },
    row: {
        marginTop: 20,
        maxHeight: 40,
        justifyContent: "center"
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

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
