import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, Grid, Row, Content, Card } from "native-base";

const Home = props => (
    <Container style={styles.container}>
        <Card transparent style={styles.card}>
            <Grid>
                <Text style={styles.title}>Manager</Text>
                <Row style={styles.row}>
                    <TouchableOpacity
                        style={styles.btnStyles}
                        onPress={() => navigation.navigate("Auth")}
                    >
                        <Text style={styles.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyles}>
                        <Text style={styles.textStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        </Card>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "teal"
    },
    card: {
        marginBottom: 250,
        maxHeight: 150,
        borderColor: "teal",
        backgroundColor: "transparent"
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "400",
        color: "#ffffff"
    },
    row: {
        marginTop: 20,
        maxHeight: 40,
        justifyContent: "center"
    },
    btnStyles: {
        width: 120,
        padding: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        minHeight: 40,
        backgroundColor: "#00b386",
        alignItems: "center"
    },
    textStyle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default Home;
