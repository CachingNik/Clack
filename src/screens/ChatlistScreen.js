import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

export default function ChatlistScreen() {

    const click = () => {

    }

    return(
        <FAB style={styles.fb} 
        icon='plus'
        onPress={click}
        theme={{ colors: { accent: 'blue' } }} />
    );
}

const styles = StyleSheet.create({
    fb: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
});
