import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { IconButton, Dialog, Portal, DefaultTheme } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import FormInput from './FormInput'
import { AuthContext } from '../navigations/AuthProvider';

export default function AddChat({ title, visible, label, close, ...rest }) {

    const { url } = useContext(AuthContext)

    const [ data, setData ] = useState([])
    const [ select, setSelect ] = useState()
    const [ cname, setCname ] = useState('')

    useEffect(() => {
        const getData = database()
            .ref('/users/')
            .on('value', (snapshot) => {
                var arr = [];
                snapshot.forEach(function(snap) {
                    var item = snap.val();
                    item['label'] = item['name']
                    delete item['name'] 
                    item.id = snap.key;
                    if(item.id !== auth().currentUser.uid)
                        arr.push(item)
                })
                setData(arr)
            });
        return () =>
            database()
              .ref('/users/')
              .off('value', getData);
        }, []);

    const addchat = () => {
        firestore()
            .collection('THREADS')
            .doc(`${auth().currentUser.uid}+${select.id}`)
            .set({
                name: cname,
                [select.id]: select.imageurl,
                [auth().currentUser.uid]: url
                }
            )
        close()
        setCname('')
    }

    return(
        <Portal theme={DefaultTheme} >
            <Dialog visible={visible} 
            {...rest} style={styles.dialog} >
            <Dialog.Content>
                <Text style={styles.title} >{title}</Text>
            </Dialog.Content>
            <Dialog.Actions>
                <FormInput label='Enter name for chat :'
                onChangeText={(text)=>setCname(text)}
                value={cname} />
            </Dialog.Actions>
            <Dialog.Actions>
            <DropDownPicker
                defaultNull={true}
                placeholder="Select User :"
                containerStyle={{height: 40, width: 200}}
                items={data}
                dropDownMaxHeight={90}
                onChangeItem={item => {setSelect(item)
                console.log(select)}} />
            </Dialog.Actions>
            <Dialog.Actions>
                <IconButton icon='check-circle' color='green' size={30} onPress={addchat} />
                <IconButton icon='close-circle' color='red' size={30} onPress={close} />
            </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

const styles = StyleSheet.create({
    dialog: {
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});