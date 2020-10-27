import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { Alert, StyleSheet, ToastAndroid, View } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';

export default function UploadImage() {

    const [ image, setImage ] = useState(null);
    const [ uploading, setUploading ] = useState(false);
    const [ fab, setFab ] = useState({ icon: 'pencil', color: '#3F51B5', label: '' })

    const selectImage = () => {
        const options = {
          maxWidth: 2000,
          maxHeight: 2000,
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log(source);
            setImage(source);
            setFab({ icon: 'check', color: 'green', label: 'OK?' })
          }
        });
    };

    const uploadImage = async () => {

        const { uri } = image
        const filename = uri.substring(uri.lastIndexOf('/') + 1)
        const uploadUri = uri

        setUploading(true)

        const task = storage()
            .ref(filename)
            .putFile(uploadUri)

        try {
            await task
            ToastAndroid.show("PHUTU UPLOADED!!", ToastAndroid.SHORT)
        } catch(e) {
            console.error(e)
        }

        setUploading(false)

        setImage(null)

        setFab({ icon: 'pencil', color: '#3F51B5', label: '' })
    }

    return(
        <View>
            { image !== null ? 
            <Avatar.Image source={{ uri: image.uri }} 
            size={170} style={styles.image} /> :
            <Avatar.Image source={{ uri: null }} 
            size={170} style={styles.image} />    
            }
            <FAB icon={fab.icon} style={styles.eimage} small
            theme={{colors: {accent: fab.color}}}
            label={fab.label}
            onPress={ fab.icon !== 'pencil' ? uploadImage : selectImage} />
        </View>
    );

}

const styles = StyleSheet.create({
    eimage: {
        position: 'absolute',
        right: 12,
        bottom: 12
    },
    image: {
        marginBottom: 15,
        backgroundColor: '#3F51B5',
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -50
    }  
});