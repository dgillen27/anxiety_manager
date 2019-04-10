import React from 'react';
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
  const { formData, currentUser } = props
  return (
    <div className="outer-login-container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={props.handleLogin} className="login-form">
          <input onChange={props.handleChange} type="text" name="email" value={formData.email} placeholder="email" />
          <input onChange={props.handleChange} type="password" name="password" value={formData.password} placeholder="password" />
          <button className="login-form-button" type="submit">Log In</button>
        </form>
        <div>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
