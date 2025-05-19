import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [masterString, setMasterString] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  // const isFormValid = username && email && password && masterString;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !masterString.trim() || !email.trim()) {
      setShowError(true);
      return;
    }
    try {
      const response = await registerUser({ username, email, password, masterString });
      if (response.error) {
        setIsModalOpen(true);
      }
      else {
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      }

    } catch (error) {
      console.error("Signup failed", error);
    }
  };


  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {showError && !username.trim() && (<p className="text-xs text-red-500">* Enter the Suitable Username</p>)}
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {showError && !email.trim() && (<p className="text-xs text-red-500">* Please Enter the correct Email</p>)}
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {showError && !password.trim() && (<p className="text-xs text-red-500">* Please Enter the Password</p>)}
          <Input type="text" placeholder="MasterString" value={masterString} onChange={(e) => setMasterString(e.target.value)} />
          {showError && !masterString.trim() && (<p className="text-xs text-red-500">* Please Enter the masterString</p>)}
          <Button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-5 rounded-md transition duration-200`}
          >Signup</Button>
          <p className="mb-5 text-center text-xs text">Already Registered? <a className=" text-blue-500 no-underline hover:underline" onClick={() => { navigate("/login") }}>Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
