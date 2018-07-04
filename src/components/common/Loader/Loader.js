import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator} from 'react-native';

class Loader extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <ActivityIndicator color={'#fff'} size={large}/>
                <TouchableOpacity style={styles.cancelBtn}/>  
            </View>        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000060,',
    },
    cancelBtn: {
    
    }
})
