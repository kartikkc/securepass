import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-500 cursor-pointer">Securepass</h1>
                    <nav className="space-x-4 text-sm">
                        <a href="#features" className="hover:text-blue-500 cursor-pointer">Features</a>
                        <a href="#pricing" className="hover:text-blue-500 cursor-pointer">Pricing</a>
                    </nav>
                    <div className="space-x-4">
                        <button onClick={() => navigate("/login")} className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">Login</button>
                        <button onClick={() => navigate("/signup")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer">Get Started</button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-20 text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-blue-700">Password Manager Trusted By Millions</h2>
                <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
                    Protect yourself from security breaches and password leaks. Use Securepass to never lose a password again and gain back your freedom.
                </p>
                <div className="space-x-4">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 cursor-pointer">Manage Your Passwords</button>
                    <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white cursor-pointer">Try For Free</button>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white" id="features">
                <h3 className="text-3xl font-bold text-center mb-10 text-blue-600">Process Of Password Save</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Create Strong Password</h4>
                        <p>Get an AI-generated password or create your own secure password manually.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Save Your Password</h4>
                        <p>Store your passwords in a secure and encrypted environment.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Audit Your Password</h4>
                        <p>Check password strength, reuse status, and monitor for breaches.</p>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4 text-blue-600">Secure, Store, And Access With Ease</h3>
                    <p className="text-gray-700 mb-6">
                        We use military-grade encryption and advanced security protocols to ensure your data is always safe.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 cursor-pointer">Try For Free</button>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-white" id="pricing">
                <h3 className="text-3xl font-bold text-center mb-10 text-blue-600">Choose The Plan That Best Suits Your Needs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="border p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110 origin-center">
                        <h4 className="text-xl font-semibold mb-2">Free</h4>
                        <p className="text-2xl font-bold mb-4">$0/month</p>
                        <ul className="text-sm space-y-2 mb-4">
                            <li>✓ Password Generator</li>
                            <li>✓ Password Vault</li>
                            <li>✓ Autofill Password</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">Try Free Now</button>
                    </div>
                    <div className="border p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110 origin-center">
                        <h4 className="text-xl font-semibold mb-2">Premium</h4>
                        <p className="text-2xl font-bold mb-4">$2.40/month</p>
                        <ul className="text-sm space-y-2 mb-4">
                            <li>✓ Dark Web Monitoring</li>
                            <li>✓ 2FA Support</li>
                            <li>✓ Cross-device Sync</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">Start Trial</button>
                    </div>
                    <div className="border p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110 origin-center">
                        <h4 className="text-xl font-semibold mb-2">Business</h4>
                        <p className="text-2xl font-bold mb-4">$6.99/month</p>
                        <ul className="text-sm space-y-2 mb-4">
                            <li>✓ Team Vaults</li>
                            <li>✓ Activity Logs</li>
                            <li>✓ Enterprise API</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer">Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-blue-500 to-purple-800 text-white py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">Protect Your Digital World</h3>
                    <p className="mb-6">Try our password manager and enjoy peace of mind with secure login and password storage.</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white cursor-pointer">Manage Your Passwords</button>
                </div>
            </footer>
        </div>
    );
}
