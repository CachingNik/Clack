import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ initializing, setInitializing ] = useState(false);
    const [ url, setUrl ] = useState(null)

    return(
        <AuthContext.Provider 
        value={{
            user,
            setUser,
            initializing,
            url,
            setUrl,
            login: async (email, password) => {
                try{
                    setInitializing(true)
                    await auth().signInWithEmailAndPassword(email, password)
                    setInitializing(false)
                } catch(e) {
                    console.log(e)
                    setInitializing(false)
                }
            },
            register: async (name, email, password) => {
                try{
                    setInitializing(true)
                    await auth().createUserWithEmailAndPassword(email, password)
                    await database().ref(`/users/${auth().currentUser.uid}`).set({
                        name: name,
                        imageurl: 'Default'
                    })
                    setInitializing(false)
                } catch(e) {
                    console.log(e)
                    setInitializing(false)
                }
            },
            logout: async () => {
                try{
                    await auth().signOut()
                } catch(e) {
                    console.log(e)
                }
            }
        }} >
            {children}
        </AuthContext.Provider>
    );
}