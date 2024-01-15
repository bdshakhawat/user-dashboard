// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import firebase from '../firebase'; // path to your firebase configuration

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [role, setRole] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user) {
                // Fetch role from Firestore
                firebase.firestore().collection('userRoles').doc(user.uid)
                    .onSnapshot(doc => {
                        setRole(doc.data()?.role || 'user');
                    });
            }
        });
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, role }}>
            {children}
        </UserContext.Provider>
    );
};
