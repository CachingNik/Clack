import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { FAB, Provider, Portal, Divider, TouchableRipple, Avatar, DefaultTheme } from 'react-native-paper';
import FormDialog from '../components/FormDialog';
import LoadWait from '../components/LoadWait';
import { AuthContext } from '../navigations/AuthProvider';

const data = [
    {
        id: '1',
        title: 'Chat_1'
    },
    {
        id: '2',
        title: 'Chat_2'
    },
    {
        id: '3',
        title: 'Chat_3'
    },
    {
        id: '4',
        title: 'Chat_4'
    },
    {
        id: '5',
        title: 'Chat_5'
    },
    {
        id: '6',
        title: 'Chat_6'
    },
    {
        id: '7',
        title: 'Chat_7'
    },
    {
        id: '8',
        title: 'Chat_8'
    },
    {
        id: '9',
        title: 'Chat_9'
    },
    {
        id: '10',
        title: 'Chat_10'
    }
];

export default function ChatlistScreen({ navigation }) {

    const { logout } = useContext(AuthContext)

    const [ open, setFab ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ animating, setani ] = useState(true)

    useEffect(() => {
        setani(false)
    })

    const cc = () => {
        setVisible(true)
    }

    const renderItem = ({ item }) => (
        <View>
        <TouchableRipple onPress={() => {navigation.push('Chat')}}>
            <View style={styles.list} >
                <Avatar.Image size={50} style={styles.listimage}
                source={require('../assets/Avatar.png')} />
                <Text style={styles.listtext} >{item.title}</Text>
            </View>
        </TouchableRipple>
        </View>
    )

    return(
        <Provider>
            
            {
            animating == true ? <LoadWait /> :
                <View style={styles.container}>
                <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={renderItem} />
                </View>
            }

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
