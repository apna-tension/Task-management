import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { login } from '../api/auth';
import { setToken } from '../utils/auth';
import { toast } from 'react-toastify';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { token } = await login(formData);
      setToken(token);
      toast.success('Login successful');
      navigate('/todo');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to To-Do App</h1>
        <p>Manage your tasks efficiently and effectively</p>
        <AuthForm onSubmit={handleLogin} buttonText="Login" />
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
