import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator} from 'react-native';

class Loader extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <ActivityIndicator />
                </TouchableOpacity> 
            </View>        
        )
    }
}
