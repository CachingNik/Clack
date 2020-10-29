import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import FormInput from '../components/FormInput';
import ProfileImage from '../components/ProfileImage';
import auth from '@react-native-firebase/auth'
import { TextInput } from 'react-native-paper';
import database from '@react-native-firebase/database';

export default function ProfileScreen() {

    const [ name, setName ] = useState()
    const [ save, setSave ] = useState(true)

    const onChangeText = (text) => {
        setName(text)
        setSave(false)
    }

    useEffect(() => {
        database()
            .ref(`/users/${auth().currentUser.uid}`)
            .on('value', snapshot => {
                setName(snapshot.val().name)
            });
    }, [])

    const updateName = async () => {
        await database()
            .ref(`/users/${auth().currentUser.uid}`)
            .update({
                name: name
            })
        setSave(true)
        ToastAndroid.show('NAME UPDATED', ToastAndroid.SHORT)
    }

    return(
        <View style={styles.main} >
            <ProfileImage />
            <Text style={styles.text} >Name:</Text>
            <FormInput value={name}
            mode='flat'
            numberOfLines={1} 
            onChangeText={onChangeText}
            right={ save === false ? <TextInput.Icon name='check-circle' color='green'
            style={{marginTop: 10}} size={18} onPress={updateName} /> : null } />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        margin: 10,
        marginLeft: -200,
        fontFamily: 'sans-serif-medium',
        fontStyle: 'italic'
    }
});
