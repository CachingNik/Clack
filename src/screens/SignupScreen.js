import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, TextInput, IconButton } from 'react-native-paper';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigations/AuthProvider'

export default function SignupScreen({ navigation }){

    const [ hide, setHide ] = useState({text: true, icon: 'eye-off'})
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { register } = useContext(AuthContext)

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
            <FormInput label='Name' value={name} onChangeText={ text => setName(text) } />
            <FormInput label='Email' value={email} onChangeText={ text => setEmail(text) } />
            <FormInput label='Password' value={password} onChangeText={ text => setPassword(text) }
            secureTextEntry={hide.text} 
            right={<TextInput.Icon name={hide.icon} onPress={click1} size={18} />} />
            <FormButton title='SIGNUP' mode='contained' icon='account'
            onPress={() => register(name, email, password) } />
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