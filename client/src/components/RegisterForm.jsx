import React from 'react';
import { Link } from 'react-router-dom';
import ImageSelect from './ImageSelect'
const RegisterForm = (props) => {
  const { handleChange, handleRegister, formData } = props
  return (
    <div className="outer-login-container">
      <div className="login-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister} className="login-form">
          <input onChange={handleChange} type="text" name="username" value={formData.username} placeholder="username" />
          <input onChange={handleChange} type="text" name="email" value={formData.email} placeholder="email" />
          <input onChange={handleChange} type="password" name="password" value={formData.password} placeholder="password" />
          <input onChange={handleChange} type="hidden" name="profile_img" value={formData.profile_img} />
          <button className="login-form-button" type="submit">Register</button>
          {/* formData.profile_img && <img className="login-image" id="selected-image" src={formData.profile_img} alt="" />*/}
        </form>
        <div>
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
        <ImageSelect {...props}/>
      </div>
    </div>
  )
}

export default RegisterForm;
