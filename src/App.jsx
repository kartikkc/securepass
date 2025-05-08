import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordGenerator from "./pages/PasswordGenerator";
import Dashboard from "./pages/dashboard";
import MasterString from "./pages/MasterString";
import OauthGoogle from "./pages/OauthGoogle";
import NotFound from "./pages/NotFound";
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/masterString" element={<MasterString />} />
      <Route path="/oauth/google" element={<OauthGoogle />} />
      <Route path="/password-generator" element={<PrivateRoute><PasswordGenerator /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
