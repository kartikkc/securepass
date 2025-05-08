import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const OauthGoogle = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (token) {
            localStorage.setItem("token", token);
            navigate("/dashboard");
        }
        else {
            navigate("/login");
        }
    }, [location, navigate]);
    return (<div>Redirecting...</div>);
};


export default OauthGoogle;
