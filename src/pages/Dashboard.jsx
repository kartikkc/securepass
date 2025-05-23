
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { getAllPasswords, getMasterString } from "../services/passwordService";
const Dashboard = () => {
    const [breachStatus, setBreachStatus] = useState("no");
    const [masterString, setMasterString] = useState("");
    const [totalPasswords, setTotalPasswords] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handlePasswords = async () => {
            try {
                const passwords = await getAllPasswords();
                setTotalPasswords(passwords.length);
            } catch (error) {
                console.log("Error Getting the Length", error);
            }
        }
        handlePasswords();
    }, []);
    const handleMasterString = async () => {
        try {
            const response = await getMasterString();
            setMasterString(response.masterString);
            console.log(masterString);
            // alert(`Master Password : ${masterString}`);
        } catch (error) {
            console.log("Error Getting the Master String", error);
        }
    }
    return (
        <div className="p-6 bg-gray-50 h-full space-y-6">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 🔴 Total Passwords */}
                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <p className="text-gray-500 text-sm">Total Passwords</p>
                    <p className="text-3xl font-bold text-black">{totalPasswords}</p>
                </div>

                {/* 🟠 Master String */}
                <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col justify-center items-center">
                    <p className="text-gray-500 text-sm">Show Master String</p>
                    <Button
                        onClick={() => handleMasterString()}
                        className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                        View
                    </Button>
                    {masterString && <Modal heading={"Master key"} message={masterString} route={"/dashboard"} icon={false} buttonText={"Close"} color={"bg-blue-500 hover:bg-blue-600"} />}
                </div>

                {/* 🟢 Generate New Password */}
                <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col justify-center items-center">
                    <p className="text-gray-500 text-sm">Generate New Password</p>
                    <Button
                        onClick={() => navigate("/password-generator")}
                        className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Generate
                    </Button>
                </div>
            </div>

            {/* 🔮 Breach Check Section */}
            <div className="bg-white p-8 rounded-xl shadow text-center">
                <h2 className="text-2xl font-bold mb-4">Breach Check</h2>
                {breachStatus === "yes" ? (
                    <p className="text-red-600 text-xl font-semibold">⚠️ Kindly check your password!</p>
                ) : (
                    <p className="text-green-600 text-xl font-semibold">✅ You are safe!</p>
                )}
            </div>
        </div >
    );
};

export default Dashboard;
