import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Grid,
    Row,
    Col,
    Content,
    Card
} from 'native-base'; 


const Home = props => {
    return ( 
        <Container style={styles.container}>
            <Card transparent style={{maxHeight: 150, borderColor: 'teal', backgroundColor: 'transparent'}}> 
                <Grid>
                    <Text style={styles.main}>Manager</Text>
                        
                    <Row style={{justifyContent: 'center', marginTop: 20, maxHeight: 40}}>
                        <TouchableOpacity style={styles.btnStyles}>
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
};

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: 'teal',
        flex: 1,
        justifyContent: 'center'
    },
    main: {
        fontSize: 40,
        marginTop: 30,
        color: '#fff',
        textAlign: "center",
        fontWeight: "400",
        fontStyle: "italic",
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

export default Home;
