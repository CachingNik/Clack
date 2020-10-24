import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

export default function LoginScreen({ navigation }){

    const [ hide, setHide ] = useState({text: true, icon: 'eye-off'})

    const click1 = () => {
        if(hide.text==true)
            setHide({text: false, icon: 'eye'})
        else
            setHide({text: true, icon: 'eye-off'})
    }

    const click2 = () => {
        navigation.navigate('Signup')
    }

    return(
        <View style={styles.login} >
            <Title style={styles.title} >MurMur</Title>
            <FormInput label='Email' />
            <FormInput label='Password' 
            secureTextEntry={hide.text} 
            right={<TextInput.Icon name={hide.icon} onPress={click1} size={18} />} />
            <FormButton title='Login' mode='contained' icon='login' />
            <FormButton title="New User? Sign UP" onPress={click2} />
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