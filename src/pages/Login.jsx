import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { setToken } from "../utils/auth";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { token } = await login(formData);
      setToken(token);
      toast.success("Login successful");
      navigate("/todo");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-section">
        <AuthForm onSubmit={handleLogin} buttonText="Login" />
      </div>
    </div>
  );
};

export default Login;
