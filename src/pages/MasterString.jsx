import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { googleLoginAPI } from "../services/authService";


const MasterString = () => {
    const [masterString, setMasterString] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, [navigate]);
    const googleLogin = async (e) => {
        e.preventDefault();
        try {
            const master = encodeURIComponent(masterString);
            googleLoginAPI(master);
            localStorage.setItem('token', response.token);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="bg-white shadow-lg p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Master Password</h2>
                <form onSubmit={googleLogin}>
                    <Input type="text" placeholder="Master Password" value={masterString} onChange={(e) => setMasterString(e.target.value)} />
                    <Button type="submit">Continue To Google</Button>
                </form>
            </div>
        </div>
    );
};

export default MasterString;
