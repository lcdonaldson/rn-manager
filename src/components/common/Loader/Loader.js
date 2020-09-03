import React, { Component } from 'react';
import {
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native';

class Loader extends Component {
    render() {
        return (
            <View style={styles.loaderLayout}> 
                <ActivityIndicator color={'#fff'} size="large"/>
                <TouchableOpacity style={styles.cancelBtn} text={'Cancel'} />  
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    loaderLayout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#00000060,',
    },
    cancelBtn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        color: '#fff',
        backgroundColor: "teal",
    }
})

export default Loader;