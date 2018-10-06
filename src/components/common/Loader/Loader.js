import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from "./styles.js";

class Loader extends React.Component {
    render() {
        return (
            <View style={styles.loaderLayout}> 
                <ActivityIndicator color={'#ffffff'} size={large}/>
                <TouchableOpacity style={styles.cancelBtn} text={'Cancel'} />  
            </View>        
        )
    }
}

