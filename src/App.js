
import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import Home from '../src/screens/Home';
import Auth from '../src/screens/Auth';

class HomeScreen extends React.Component {
    render() {
        return (
            <Home/>
        );
    }  
}

class AuthScreen extends React.Component {
    render(){
        return (
            <Auth/>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Auth: {
            screen: AuthScreen
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

