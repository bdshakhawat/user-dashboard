// src/components/SuperAdminDashboard.js
import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const SuperAdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all users and their roles
        firebase.firestore().collection('userRoles').onSnapshot(snapshot => {
            const usersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(usersData);
        });
    }, []);

    const handleChangeRole = (userId, newRole) => {
        // Update role in Firestore
        firebase.firestore().collection('userRoles').doc(userId).update({ role: newRole });
    };

    return (
        <div>
            <h1>Super Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.role}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleChangeRole(user.id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="super-admin">Super Admin</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
);

}   
export default SuperAdminDashboard;     
