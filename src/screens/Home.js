import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        fontStyle: 'italic',
    },
});

const Home = (props) => {
    return (

        <View style={styles.container}>
            <Text style={styles.main}> Home </Text>
            <Button
                text="Details"
            // onPress={() => props.navigation.navigate('Details')}
            />
        </View>
        
    );
};

Home.propTypes = {
    navigation: React.PropTypes.object,
};

export default Home;