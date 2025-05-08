
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";
const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const getName = () => {
        var token = localStorage.getItem("token");
        const name = jwtDecode(token);
        return name.name;
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col m-auto w-full mt-12 mx-12">
                <Navbar name={getName()} />
                <div className="flex justify-center items-center mx-auto">
                    <div className="bg-white shadow-lg p-6 rounded-lg w-96 text-center">
                        <p>Welcome to your secure password manager!</p>
                        <div className="mt-4">
                            <Button onClick={() => navigate("/password-generator")}>Generate Password</Button>
                            <Button onClick={() => navigate("/breach-check")}>Check Breach</Button>
                            <Button onClick={handleLogout} className="bg-red-500 mt-2">Logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
