import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Auth from './components/common/Auth/Auth';

// import { emailChanged } from './actions';
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { StackNavigator } from "react-navigation";
// import { Container, Grid, Row, Content, Card, Form, Label, Item, Input, Button} from "native-base";

export default class App extends Component {
    componentWillMount () {
        const config = {
            apiKey: "AFakeKey",
            authDomain: "manager-bffb6.firebaseapp.com",
            databaseURL: "https://manager-bffb6.firebaseio.com",
            projectId: "manager-bffb6",
            storageBucket: "manager-bffb6.appspot.com",
            messagingSenderId: "377920201708"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Auth/>
            </Provider>
        );
    }
}


// class SignUpScreen extends React.Component {
//     render() {
//         return (
//             <Container style={styles.container}>
//                 <Text style={styles.title}> Sign Up Screen </Text>
//                 <Form style={styles.form}>
//                     <Item rounded style={styles.spc}>
//                         <Input style={styles.inputText} placeholder = "First Name" />
//                     </Item>
//                     <Item rounded style={styles.spc}>
//                         <Input style={styles.inputText} placeholder="Last Name" />
//                     </Item>
//                     <Item rounded style={styles.spc}>
//                         <Input secureTextEntry style={styles.inputText} placeholder="Email" />
//                     </Item>
//                 </Form>
//             </Container>
//         );
//     }
// }

// const RootStack = StackNavigator(
//     {
//         Home: { 
//             screen: HomeScreen
//         },
//         // Auth: {
//         //     screen: AuthScreen
//         // },
//         // SignUp: {
//         //     screen: SignUpScreen
//         // }
//     },
//     {
//         initialRouteName: "Home"
//     }
// );

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "teal",
//     },
//     card: {
//         maxHeight: 150,
//     },
//     title: {
//         fontSize: 40,
//         minHeight: 50,
//         margin: 20,
//         textAlign: "center",
//         fontWeight: "400",
//         color: "#fff"
//     }, 
//     row: {
//         marginTop: 20,
//         maxHeight: 40,
//         justifyContent: "center"
//     },
//     btnStyles: {
//         minWidth: 120,
//         minHeight: 40,
//         padding: 10,
//         borderRadius: 20,
//         marginVertical: 10,
//         backgroundColor: "#00b386",
//         color: 'white',
//         alignItems: "center"
//     },
//     textStyle: {
//         color: "#fff",
//         fontSize: 16,
//         letterSpacing: 1.5,
//         fontWeight: "bold"
//     },
//     submit: {
//         borderRadius: 30,
//         padding: 20,
//         justifyContent: "center", 
//         backgroundColor: "#fff",
//         color: "teal",
//     },
//     spc: {
//         marginVertical: 10,
//         paddingHorizontal: 10,
//     },
//     inputText: {
//         fontWeight: "bold",
//         color: "#fff"
//     },
//     form: {
//         paddingHorizontal: 20
//     },
// });

// export default connect(null, { emailChanged })(HomeScreen)

// export class App extends React.Component {
//     render() {
//         return <RootStack />;
//     }
// }
