import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { IconButton, Dialog, Portal, DefaultTheme } from 'react-native-paper';
import FormInput from "./FormInput";

export default function FormDialog({ title, visible, label, close, ...rest }) {
    return(
        <Portal theme={DefaultTheme} >
            <Dialog visible={visible} 
            {...rest} style={styles.dialog} >
            <Dialog.Content>
                <Text style={styles.title} >{title}</Text>
            </Dialog.Content>
            <Dialog.Actions>
                <FormInput label={label} mode='flat' />
            </Dialog.Actions>
            <Dialog.Actions>
                <IconButton icon='check-circle' color='green' size={30} onPress={() => {}} />
                <IconButton icon='close-circle' color='red' size={30} onPress={close} />
            </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

const styles = StyleSheet.create({
    dialog: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20
    }
});