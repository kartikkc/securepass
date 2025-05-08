import React from 'react';

const Navbar = ({ name }) => {
    return (
        <div className="flex flex-row justify-between items-center mb-6">
            <div>
                <h2 className="text-xl font-semibold">Hello, {name}</h2>
            </div>
            <div className="text-sm text-gray-400">16 May, 2023 📅</div>
        </div>
    )
}

export default Navbar;