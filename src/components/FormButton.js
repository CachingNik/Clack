import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormButton({ title, ...rest }) {
    return(
        <View style={styles.vbutton}>
            <Button {...rest} >{title}</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    vbutton: {
        marginTop: 10
    }
});