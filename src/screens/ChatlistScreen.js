import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, Provider, Portal } from 'react-native-paper';

export default function ChatlistScreen() {

    const [ open, setFab ] = useState(false)

    const click = () => {

    }

    const cc = () => {
        
    }

    return(
        <Provider>
            <Portal>
                <FAB.Group style={styles.main} 
                icon='cog'
                onPress={click}
                onStateChange={({ open }) => { setFab(open) }}
                open={open}
                fabStyle={styles.button}
                theme={{ colors: { accent: 'black' } }}
                actions={[
                    {icon: 'plus',
                    label: 'Create Chat',
                    onPress: cc}
                ]} />
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
    }
});
