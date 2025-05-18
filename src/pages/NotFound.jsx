import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
            {/* <img src={logo} alt="SecurePass Logo" className="w-16 mb-4" /> */}
            <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
            <p className="text-gray-500 mb-6 text-center max-w-md">
                The page you’re looking for doesn’t exist or has been moved. Please check the URL or go back to the homepage.
            </p>
            <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;