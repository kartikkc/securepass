import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Home, User, Key, ShieldAlert, LogOut } from "lucide-react";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <div className="w-100 h-full bg-white shadow-lg flex flex-col justify-between p-4">
            <div>
                <h1 className="flex items-center space-x-4 text-2xl font-bold mb-6 p-7"> <img src={logo} className="w-7" /> <span>
                    SecurePass</span></h1>
                <ul className="space-y-4 text-gray-700 p-7">
                    <li className="hover:text-blue-500 cursor-pointer flex items-center space-x-2" onClick={() => navigate("/dashboard")}><Home size={20} /><span>Home</span></li>
                    <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer" onClick={() => navigate("/passwords")}> <Key size={20} /> <span> Passwords</span></li>
                    <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer" onClick={() => navigate("/breach")}> <ShieldAlert size={20} /><span> Breach-Check</span></li>
                    <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer" onClick={() => navigate("/profile")}><User size={20} /><span>
                        Profile
                    </span>
                    </li>
                </ul>
            </div>
            <button className=" hover:text-red-500 px-4 py-1 text-sm flex items-center space-x-2" onClick={() => handleLogout()}><LogOut size={20} />
                <span>
                    Logout
                </span>
            </button>

        </div>
    );
}

export default Sidebar;


