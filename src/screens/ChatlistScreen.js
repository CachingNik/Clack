import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { FAB, Provider, Portal, Divider, TouchableRipple, Avatar, DefaultTheme } from 'react-native-paper';
import AddChat from '../components/AddChat';
import { AuthContext } from '../navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

export default function ChatlistScreen({ navigation }) {

    const { logout } = useContext(AuthContext)

    const [ open, setFab ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        const chats = firestore()
            .collection('THREADS')
            .onSnapshot(querySnapshot => {
                const temp = querySnapshot.docs.map(docsnap => {
                    if(docsnap.id.includes(auth().currentUser.uid))
                        return{
                            id: docsnap.id,
                            ...docsnap.data()
                        };
                })
                var filteredtemp = temp.filter(function (el) {
                    return el != null;
                  });
                  console.log(filteredtemp)
                setData(filteredtemp)
            })

        return () => chats();
    }, [])

    const cc = () => {
        setVisible(true)
    }

    var url;
    const imagechanged = (item) => {
        url = item[item.id.replace('+', '').replace(auth().currentUser.uid, '')] + new Date();
        return url
    }

    const renderItem = ({ item }) => (
        <View>
        <TouchableRipple onPress={() => {navigation.push('Chat')}}>
            <View style={styles.list} >
                {
                    <Avatar.Image source={{ uri: imagechanged(item) }} 
                    size={50} style={styles.listimage} />
                }       
                <Text style={styles.listtext} >{item.name}</Text>
            </View>
        </TouchableRipple>
        </View>
    )

    return(
        <Provider>

            <View style={styles.container}>
            <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={renderItem} />
            </View>

            <Portal theme={DefaultTheme} >
            <FAB.Group style={styles.main} 
            icon={open?'close':'cog'}
            onPress={() => {}}
            onStateChange={({ open }) => { setFab(open) }}
            open={open}
            fabStyle={styles.button}
            actions={[
                {
                    icon: 'plus', label: 'Create Chat', onPress: cc
                },
                {
                    icon: 'logout', label: 'Logout', onPress: () => {logout()}
                }
            ]} />
            </Portal>

            <AddChat title='CHAT WITH CLACK'
            visible={visible}
            close={() => {setVisible(false)}}
            onDismiss={() => {setVisible(false)}} />
            
        </Provider>
    );
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    button: {
        backgroundColor: "#607D8B"
    },
    list: {
        flexDirection: "row",
        alignItems: "center"
    },
    listtext: {
        marginLeft: 10,
        fontSize: 20
    },
    listimage: {
        margin: 10,
        backgroundColor: '#d3d6db',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
