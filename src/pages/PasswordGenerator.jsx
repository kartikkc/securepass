import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { generatePassword } from "../services/passwordService";
import Modal from "../components/Modal";

const PasswordGenerator = () => {
  const navigate = useNavigate();
  const [inputString, setInputString] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleGenerate = async () => {
    if (!inputString.trim()) {
      setShowError(true);
      return;
    }
    try {
      const response = await generatePassword(inputString);
      if (response.error == "Session Timed Out") {
        setIsModalOpen(true);
      }
      else if (response.error == "Bad Request") {
        setIsModalOpen2(true);
      }
      else {
        setGeneratedPassword(response.hashedPassword);
      }
    } catch (error) {
      setGeneratedPassword(error);
      console.error("Password generation failed", error);
    }
  };

  const redirectLogin = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }



  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Generate Secure Password</h2>
        <Input type="text" placeholder="Enter the website" value={inputString} onChange={(e) => setInputString(e.target.value)} />
        {showError && !inputString.trim() && (<p className="text-xs text-red-600">* Enter the name of the Website.</p>)}
        <Button onClick={handleGenerate}>Generate</Button>
        {generatedPassword && <p className="mt-4 p-2 bg-gray-100 text-center overflow-scroll">{generatedPassword}</p>}
        {isModalOpen && <Modal onClose={() => { setIsModalOpen(false); redirectLogin(); }} heading={"Login Again"} message={"Authorization failed due to session time out. Please Login Again to Continue."} buttonText={"Login"} route={"/login"} cancelButton={false} />}
        {isModalOpen2 && <Modal onClose={() => { setIsModalOpen2(false); }} heading={"Enter Website"} message={"Please enter the website for which you want to generate the password for."} buttonText={"Retry"} cancelButton={false} />}
        <Button onClick={() => navigate("/dashboard")}>Back</Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
