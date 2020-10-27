import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigations/AuthProvider';

export default function LoginScreen({ navigation }){

    const [ hide, setHide ] = useState({text: true, icon: 'eye-off'})
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { login } = useContext(AuthContext)

    const click1 = () => {
        if(hide.text==true)
            setHide({text: false, icon: 'eye'})
        else
            setHide({text: true, icon: 'eye-off'})
    }
    
    const click3 = () => {
        navigation.navigate('Signup')
    }

    return(
        <View style={styles.login} >
            <Title style={styles.title} >Clack</Title>
            <FormInput label='Email' value={email} onChangeText={ text => setEmail(text) } />
            <FormInput label='Password' label='Password' value={password} onChangeText={ text => setPassword(text) } 
            secureTextEntry={hide.text} 
            right={<TextInput.Icon name={hide.icon} onPress={click1} size={18} />} />
            <FormButton title='Login' mode='contained' icon='login' onPress={ () => login(email, password) } />
            <FormButton title="New User? Sign UP" onPress={click3} />
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