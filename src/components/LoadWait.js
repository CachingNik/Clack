import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoadWait () {
    return(
        <View style={styles.AI} >
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    AI: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
});