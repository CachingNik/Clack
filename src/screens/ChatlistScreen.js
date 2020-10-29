import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { FAB, Provider, Portal, Divider, TouchableRipple, Avatar, DefaultTheme } from 'react-native-paper';
import FormDialog from '../components/FormDialog';
import { AuthContext } from '../navigations/AuthProvider';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function ChatlistScreen({ navigation }) {

    const { logout } = useContext(AuthContext)

    const [ open, setFab ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = database()
            .ref('/users/')
            .on('value', (snapshot) => {
                var arr = [];
                snapshot.forEach(function(snap) {
                    var item = snap.val();
                    item.id = snap.key;
                    if(item.id !== auth().currentUser.uid)
                        arr.push(item)
                })
                setData(arr)
                console.log(data)
            });
        return () =>
            database()
              .ref('/users/')
              .off('value', getData);
        }, [auth().currentUser.uid]);

    //const cc = () => {
    //    setVisible(true)
    //}

    const renderItem = ({ item }) => (
        <View>
        <TouchableRipple onPress={() => {navigation.push('Chat')}}>
            <View style={styles.list} >
                {
                    item.imageurl ?
                    <Avatar.Image size={50} style={styles.listimage}
                    source={{ uri: item.imageurl }} /> :
                    <Avatar.Image source={require('../assets/Avatar.png')} 
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
                //{
                    //icon: 'plus', label: 'Create Chat', onPress: cc
                //},
                {
                    icon: 'logout', label: 'Logout', onPress: () => {logout()}
                }
            ]} />
            </Portal>

            <FormDialog title='Enter Name for your chat:'
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
