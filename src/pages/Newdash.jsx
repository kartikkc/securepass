import { useState } from "react";

const Dashboard = () => {
    const [breachStatus, setBreachStatus] = useState("no"); // or "yes"
    const totalPasswords = 14;
    const masterString = "my$uper$ecret"; // Example only

    return (
        <div className="p-6 bg-gray-50 min-h-screen space-y-6">
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
                    <button
                        onClick={() => alert(`Master String: ${masterString}`)}
                        className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                        View
                    </button>
                </div>

                {/* 🟢 Generate New Password */}
                <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col justify-center items-center">
                    <p className="text-gray-500 text-sm">Generate New Password</p>
                    <button
                        onClick={() => alert("Redirect to password generation page")}
                        className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Generate
                    </button>
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
        </div>

        // <div className="flex justify-center items-center mx-auto">
        //     <div className="bg-white shadow-lg p-6 rounded-lg w-96 text-center">
        //         <p>Welcome to your secure password manager!</p>
        //         <div className="mt-4">
        //             <Button onClick={() => navigate("/password-generator")}>Generate Password</Button>
        //             <Button onClick={() => navigate("/breach-check")}>Check Breach</Button>
        //             <Button onClick={handleLogout} className="bg-red-500 mt-2">Logout</Button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashboard;
