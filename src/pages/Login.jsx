import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Input from "../components/Input";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setShowErrors(true);
      return;
    }
    try {
      const response = await loginUser({ email, password });
      if (response.error) {
        setIsModalOpen(true);
      }
      else {
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  async function googleLogin(e) {
    e.preventDefault();
    try {
      navigate("/masterString");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} >
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {showErrors && !email.trim() && (<p className="text-xs text-red-600">*Email is required</p>)}
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {showErrors && !email.trim() && (<p className="text-xs text-red-600">*Password is required</p>)}
          <Button type="submit">Login</Button>
          <p className="mb-5 text-center text-xs text">Not Registered? <a className=" text-blue-500 no-underline hover:underline" onClick={() => navigate("/signup")}>SignUp</a></p>
        </form>
        <hr />
        <Button onClick={googleLogin}>Continue With Google</Button>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} heading={"Login Failed"} message={"Invalid Credentials. Check your Username or Pasword and Try again."} buttonText={"Close"} />}
    </div>
  );
};

export default Login;
