import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, TextInput, IconButton } from 'react-native-paper';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

export default function SignupScreen({ navigation }){

    const [ hide, setHide ] = useState({text: true, icon: 'eye-off'})

    const click1 = () => {
        if(hide.text==true)
            setHide({text: false, icon: 'eye'})
        else
            setHide({text: true, icon: 'eye-off'})
    }

    const click2 = () => {
        navigation.pop()
    }

    return(
        <View style={styles.login} >
            <Title style={styles.title} >Register</Title>
            <FormInput label='Name' />
            <FormInput label='Email' />
            <FormInput label='Password' 
            secureTextEntry={hide.text} 
            right={<TextInput.Icon name={hide.icon} onPress={click1} size={18} />} />
            <FormButton title='SIGNUP' mode='contained' icon='account' />
            <IconButton icon='keyboard-backspace'
            size={30}
            color="#6646ee" 
            onPress={click2} />
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        marginBottom: 20,
        fontSize: 24
    }
});