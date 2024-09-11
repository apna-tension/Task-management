import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const { email, password, username } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{buttonText}</h2>
      {buttonText === 'Register' && (
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={handleChange} required />
        </div>
      )}
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} required />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
