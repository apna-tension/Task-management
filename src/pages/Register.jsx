import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';
import { toast } from 'react-toastify';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await register(formData);
      toast.success('Registered successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <div className="register-page">
      <div className="register-section">
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
      </div>
    </div>
  );
};

export default Register;
