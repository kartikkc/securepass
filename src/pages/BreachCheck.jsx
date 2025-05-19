import React from "react";

const breachData = {
    success: true,
    found: 4,
    result: [
        {
            email: "jaydensh5@gmail.com",
            has_password: false,
            sources: "TrueCaller India",
        },
        {
            email: "jaydensh5@gmail.com",
            hash_password: true,
            sha1: "3970907d3b4952a81c80e86879060d87f2fbcb37",
            hash: "4qZOfprI2no1MGtKneM6vPqEIdlIenmgiMMdHN/xjA==",
            sources: "Stealer Logs",
        },
        {
            email: "jaydensh5@gmail.com",
            hash_password: true,
            sha1: "6bbd8f2577c35d038024a74dabbf6965652e3ffe",
            hash: "NSSVfroFOnccEx5RB/vVStKVMphpJSDx78hpSA==",
            sources: "Stealer Logs",
        },
        {
            email: "jaydensh5@gmail.com",
            hash_password: true,
            sha1: "580a63f87beb37d635650daeacac128578e4cbd6",
            hash: "yUFfE40GzxClrnkacpzzPNKVMphpJSDx78hpSOk=",
            sources: "Stealer Logs",
        },
    ],
};

const BreachCheck = () => {
    if (!breachData.success) {
        return (
            <div className="p-6 text-center text-red-600 font-semibold">
                No breach data available.
            </div>
        );
    }

    return (
        <div className="max-w-full mx-auto px-6 mt-10">
            <div className="bg-white shadow-md rounded-lg max-h-[45rem] overflow-y-auto p-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    🔐 Breach Report
                </h2>

                <p className="text-lg mb-4 text-gray-700">
                    <strong>Total Records Found:</strong> {breachData.found}
                </p>

                <div className="space-y-6">
                    {breachData.result.map((entry, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-5 bg-gray-50 shadow-sm"
                        >
                            <p className="text-gray-800">
                                <strong>Email:</strong> {entry.email}
                            </p>

                            {entry.password && (
                                <p className="text-gray-800">
                                    <strong>Exposed Password:</strong>{" "}
                                    <span className="text-red-600 font-mono">
                                        {entry.password}
                                    </span>
                                </p>
                            )}

                            {entry.hash_password && (
                                <>
                                    <p className="text-gray-800">
                                        <strong>SHA-1:</strong>{" "}
                                        <span className="font-mono text-sm">{entry.sha1}</span>
                                    </p>
                                    <p className="text-gray-800">
                                        <strong>Hash:</strong>{" "}
                                        <span className="font-mono text-sm">{entry.hash}</span>
                                    </p>
                                </>
                            )}

                            <p className="text-gray-800">
                                <strong>Source:</strong>{" "}
                                <span className="text-blue-700">{entry.sources}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreachCheck;
