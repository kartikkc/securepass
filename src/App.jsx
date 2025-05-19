import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordGenerator from "./pages/PasswordGenerator";
import Dashboard from "./pages/Dashboard";
import MasterString from "./pages/MasterString";
import OauthGoogle from "./pages/OauthGoogle";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Passwords from "./pages/Passwords";
import ProfilePage from "./pages/Profile";
import BreachCheck from "./pages/BreachCheck";
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/masterString" element={<MasterString />} />
      <Route path="/oauth/google" element={<OauthGoogle />} />
      <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/passwords" element={<Passwords />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/breach" element={<BreachCheck />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
