import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { FAB, Provider, Portal, List, Divider, TouchableRipple } from 'react-native-paper';
import FormDialog from '../components/FormDialog';
import LoadWait from '../components/LoadWait';

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

    const [ open, setFab ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ animating, setani ] = useState(true)

    useEffect(() => {
        setani(false)
    })

    const cc = () => {
        setVisible(true)
    }

    return(
        <Provider>
            
            { animating == true ? <LoadWait /> :
                <View style={styles.container}>
                <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                    <View>
                    <TouchableRipple onPress={() => {navigation.push('Chat')}}>
                    <List.Item
                    title={item.title}
                    titleStyle={styles.listTitle}
                    description="Item description"
                    descriptionStyle={styles.listDescription} />
                    </TouchableRipple>
                    </View>)} />
            </View> }

            <Portal>
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
                    icon: 'logout', label: 'Logout', onPress: () => {navigation.pop()}
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
    container: {
    },
    listTitle: {
        fontSize: 22
    },
    listDescription: {
        fontSize: 16
    }
});
