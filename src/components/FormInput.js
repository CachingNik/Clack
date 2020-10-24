import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInput({ label, ...rest }) {
    return(
        <TextInput label={label}
        style={styles.input}
        numberOfLines={1}
        mode='outlined'
        {...rest} />
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 0,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
    }
});