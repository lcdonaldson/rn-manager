import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { emailChanged, passwordChanged } from '../../../actions'
import {
    Container,
    Form,
    Item,
    Input,
    Button
} from "native-base";
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';

class Auth extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }
    render() {
        return (
            <Container style={styles.container}>
                <Text style={styles.title}> Manager </Text>
                <Form style={styles.form}>
                    <Item rounded style={styles.spc}>
                        <Input 
                            label="Email"
                            placeholder="your-name@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                            style={{paddingLeft: 25}}
                        />
                    </Item>
                    <Item rounded last style={styles.spc}>
                        <Input 
                            secureTextEntry 
                            placeholder="Password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </Item>
                    <Button block success rounded style={styles.btnStyles}>
                        <Text style={styles.textStyle}>Submit</Text>
                    </Button>
                </Form>
                {/* <Loader/> */}
            </Container>
        )
    }
};

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
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged }) (Auth);
