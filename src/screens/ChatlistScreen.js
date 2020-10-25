import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FAB, Provider, Portal, List } from 'react-native-paper';
import FormDialog from "../components/FormDialog";

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
    }
];

export default function ChatlistScreen() {

    const [ open, setFab ] = useState(false)
    const [ visible, setVisible ] = useState(false)

    const cc = () => {
        setVisible(true)
    }

    return(
        <Provider>
            <Portal>
            <View style={styles.container}>
                <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <List.Item
                    title={item.title}
                    titleStyle={styles.listTitle} />
                    )} />
            </View>
            <FAB.Group style={styles.main} 
                icon='cog'
                onPress={() => {}}
                onStateChange={({ open }) => { setFab(open) }}
                open={open}
                fabStyle={styles.button}
                actions={[
                    {icon: 'plus',
                    label: 'Create Chat',
                    onPress: cc}
                ]} />
                <FormDialog title='Enter Name for your chat:'
                visible={visible}
                close={() => {setVisible(false)}}
                onDismiss={() => {setVisible(false)}} />
            </Portal>
        </Provider>
    );
}

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        margin: 16,
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
