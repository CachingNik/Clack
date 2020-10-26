import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';
import FormInput from '../components/FormInput';

export default function ProfileScreen() {
    return(
        <View style={styles.main} >
            <View>
                <Avatar.Image source={require('../assets/Avatar.png')} 
                size={170} style={styles.image} />
                <FAB icon='pencil' style={styles.eimage} small
                theme={{colors: {accent: '#3F51B5'}}}
                onPress={() => {}} />
            </View>
            <FormInput value='Unknown'
            label='Name'
            numberOfLines={1} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        marginBottom: 15,
        backgroundColor: '#3F51B5',
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -50
    },
    eimage: {
        position: 'absolute',
        right: 12,
        bottom: 12
    } 
});
