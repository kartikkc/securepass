import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Layout = () => {
    const getName = () => {
        const token = localStorage.getItem("token");
        const name = jwtDecode(token);
        return name.name;
    }
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="fflex flex-col m-auto w-full mt-12 mx-12">
                <Navbar name={getName()} />
                <main className="p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;