import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import {
    getUserProfile,
    updateProfile,
    changePassword,
    deleteAccount
} from '../services/userService';

const ProfilePage = () => {
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [newData, setNewData] = useState({ name: '', email: '' });
    const [passwordChange, setPasswordChange] = useState({ oldPass: '', newPass: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const navigate = useNavigate();

    const fetchProfile = async () => {
        const response = await getUserProfile();
        if (response.error === "Unauthorized") {
            setIsModalOpen(true);
            navigate('/login');
        } else {
            setUser(response);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [newData, deleted]);

    const handleUpdate = async () => {
        const result = await updateProfile(newData);
        if (result.success) {
            setUser(result.user);
            setEditMode(false);
            fetchProfile();
        } else {
            alert("Error updating profile");
        }
    };

    const handlePasswordChange = async () => {
        const result = await changePassword(passwordChange);
        if (result.success) {
            alert("Password updated");
            setPasswordChange({ oldPass: '', newPass: '' });
        } else {
            alert("Failed to change password");
        }
    };

    const handleDelete = async () => {
        const result = await deleteAccount();
        if (result.success) {
            localStorage.clear();
            setDeleted(true);
            navigate("/login");
            console.log("redirect");
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>

            {!editMode ? (
                <div className="bg-white shadow p-4 rounded-lg">
                    <p><strong>Name:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                    <div className="mt-4 space-x-4">
                        <button onClick={() => setEditMode(true)} className="btn bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
                        <button onClick={() => { setDeleteModal(true); }} className="btn bg-red-500 text-white px-4 py-2 rounded">Delete Account</button>
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow p-4 rounded-lg space-y-4">
                    <input
                        className="w-full p-2 border rounded"
                        placeholder="New Name"
                        value={newData.username}
                        onChange={(e) => setNewData({ ...newData, username: e.target.value })}
                    />
                    <input
                        className="w-full p-2 border rounded"
                        placeholder="New Email"
                        value={newData.email}
                        onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                    />
                    <button onClick={handleUpdate} className="btn bg-green-500 text-white px-4 py-2 rounded">Save</button>
                    <button onClick={() => setEditMode(false)} className="btn text-gray-500 px-4 py-2">Cancel</button>
                </div>
            )}

            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                <input
                    className="w-full p-2 mb-2 border rounded"
                    type="password"
                    placeholder="Old Password"
                    value={passwordChange.oldPass}
                    onChange={(e) => setPasswordChange({ ...passwordChange, oldPass: e.target.value })}
                />
                <input
                    className="w-full p-2 mb-2 border rounded"
                    type="password"
                    placeholder="New Password"
                    value={passwordChange.newPass}
                    onChange={(e) => setPasswordChange({ ...passwordChange, newPass: e.target.value })}
                />
                <button onClick={handlePasswordChange} className="btn bg-indigo-500 text-white px-4 py-2 rounded">Change Password</button>
            </div>

            {deleteModal && (
                <Modal
                    heading="Confirm Account Deletion"
                    message="Are you sure you want to delete your account? This action cannot be undone."
                    buttonText="Yes, Delete"
                    cancelButton={true}
                    icon={false}
                    color="bg-red-600 hover:bg-red-700"
                    onConfirm={handleDelete}
                    onClose={() => setDeleteModal(false)}
                />
            )}

            {isModalOpen && (
                <Modal
                    heading="Session Timed Out"
                    message="Please login again."
                    buttonText="Login"
                    logout={true}
                    route="/login"
                />
            )}
        </div>
    );
};

export default ProfilePage;
