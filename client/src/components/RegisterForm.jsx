import React from 'react';
import { Link } from 'react-router-dom'

const RegisterForm = (props) => {
  const { handleChange, handleRegister, formData } = props
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        <input onChange={handleChange} type="text" name="username" value={formData.username} placeholder="username" />
        <input onChange={handleChange} type="text" name="email" value={formData.email} placeholder="email" />
        <input onChange={handleChange} type="text" name="profile_img" value={formData.profile_img} placeholder="profile_img" />
        <input onChange={handleChange} type="text" name="password" value={formData.password} placeholder="password" />
        <button>Register</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  )
}

export default RegisterForm;
