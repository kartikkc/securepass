import React from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between p-4">
            <div>
                <h1 className="text-xl font-bold mb-6">SecurePass</h1>
                <ul className="space-y-4 text-gray-700">
                    <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/dashboard")}> Home</li>
                    <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/passowrds")}> Passwords</li>
                    <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/breach")}> Breach-Check</li>
                    <li className="hover:text-blue-500 cursor-pointer" onClick={() => navigate("/profile")}> Profile</li>
                </ul>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Logout</button>

        </div>
    );
}

export default Sidebar;