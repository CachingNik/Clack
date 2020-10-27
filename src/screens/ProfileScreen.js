import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import FormInput from '../components/FormInput';
import UploadImage from '../components/UploadImage';

export default function ProfileScreen() {
    return(
        <View style={styles.main} >
            <UploadImage />
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
    }
});
