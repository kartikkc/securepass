import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { deletePassword, getAllPasswords, getOnePassword, updateOnePassword } from '../services/passwordService';
import Modal from '../components/Modal';
const Passwords = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [passwords, setPasswords] = useState([]);
    const [password, setPassword] = useState("");
    // Function that makes the function call
    const handlePasswords = async () => {
        try {
            const response = await getAllPasswords();
            if (response.error == "Session Timed Out") {
                setIsModalOpen(true);
            }
            else {
                setPasswords(response);
            }
        } catch (error) {
            console.log("No Password Registered", error);
        }
    };
    // Fetching the password as soon as it renders
    useEffect(() => {
        handlePasswords();
    }, [deleteModal]);

    // Handling the view button
    const handleView = async (passwordId) => {
        try {
            const onePass = await getOnePassword(passwordId);
            setPassword(onePass);
        } catch (error) {
            console.log("Enter the Master Key", error);
        }
    };
    // Handles the Edit Function
    const handleEdit = async (id, website) => {
        try {
            const response = await updateOnePassword(id, website);
            console.log(response);
            if (response.error == "Not Found") {
                window.alert('The password you are trying to update does not exist');
                setEditModal(false);
            }
            else if (response.error == "Unauthorized") {
                window.alert('Please Login again');
                navigate("/login");
            }
            else {
                setPassword(response);
                setEditModal(true);
            }
        }
        catch (error) {
            console.log("Error Updating the Password");
        }
    };
    // Hanldes the Delete Function
    const handleDelete = async (id) => {
        try {
            const response = await deletePassword(id);
            if (response.data.msg == "Password deleted successfully") {
                setDeleteModal(true);
                setPasswords((prev) => prev.filter((item) => item._id !== id));
            }
            else if (response.error == "Please login again") {
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error("Something Went Wrong", error);
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Passwords</h2>
                <p className="text-sm text-gray-500">{passwords.length}-Items</p>
            </div>

            {/* Table */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-4 border-b font-semibold text-gray-700 grid grid-cols-4">
                    <span>Website</span>
                    <span></span>
                    <span className="col-span-2 text-right">Actions</span>
                </div>
                {passwords.map((entry) => (
                    <div
                        key={entry.id}
                        className="p-4 grid grid-cols-4 items-center border-b hover:bg-gray-50 transition"
                    >
                        <div className="text-sm font-medium text-gray-800">{entry.website}</div>
                        <div className="text-sm text-gray-600"></div>
                        <div className="col-span-2 flex justify-end space-x-4">
                            <button
                                onClick={() => { handleEdit(entry._id, entry.website); setEditModal(true); }}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                <Pencil size={18} />
                            </button>

                            {editModal && <Modal onClose={() => setEditModal(false)} route={"/passwords"} heading={"Password Updated"} message={password.password} icon={false} color={"bg-blue-500 hover:bg-blue-600"} buttonText={"Close"} />}

                            <button
                                onClick={() => { handleDelete(entry._id); setDeleteModal(true); }}
                                className="text-red-500 hover:text-red-700"
                            >
                                <Trash2 size={18} />
                            </button>

                            {deleteModal && <Modal onClose={() => setDeleteModal(false)} heading={"Password Deleted Successfully"} message={"The password have been deleted Successfully. Now You can close this."} buttonText={"Close"} icon={false} color={"bg-blue-500 hover:bg-blue-600"} route={"/passwords"} />}

                            <button
                                onClick={() => {
                                    handleView(entry._id);
                                    setViewModal(true);
                                }}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Eye size={18} />
                            </button>
                            {viewModal && <Modal onClose={() => setViewModal(false)} heading={password.website} message={password.genPassword} buttonText={"Copy"} c icon={false} color={"bg-blue-500 hover:bg-blue-600"} route="/passwords" />}
                        </div>
                    </div>
                ))}
                {passwords.length === 0 && (
                    <div className="text-center text-sm p-6 text-gray-400">No passwords saved yet.</div>
                )}
            </div>
            {isModalOpen && <Modal heading={"Session Timed Out"} message={"Please Login Again the Session is Timed Out"} buttonText={"Login"} route={"/login"} onClose={() => setIsModalOpen(false)} logout={true} />}
        </div >
    );
};


export default Passwords;