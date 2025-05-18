import React from 'react';
import { CalendarDays } from 'lucide-react';
const Navbar = ({ name }) => {
    return (
        <div className="flex flex-row justify-between items-center mb-6">
            <div>
                <h2 className="text-xl font-semibold">Hello, {name}</h2>
            </div>
            <div className="flex text-md text-gray-400 space-x-4">
                <div className="p-[1.2vh]">
                    {new Date().toDateString()}
                </div>

                <div className=" bg-gray-100 rounded-full h-10 w-10 p-[1.2vh]">
                    <CalendarDays size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;