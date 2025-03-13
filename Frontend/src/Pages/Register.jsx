import React, { useState } from 'react'
import { register } from '../api/userApi'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    let [user, setUser] = useState({})
    const navigate = useNavigate()

const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
}
const handleLogin = () => {
    navigate('/login')
  }
const handleSubmit = e =>{
    e.preventDefault()
    //console.log(user)
    register(user)
    .then(data =>{
        if (data.error){
          Swal.fire("Hey","All Fields are Required","info")
        }
        else{
            alert(data.message)
        }
    })
}
    return (
        <>
    
    <div className='loginmain'>

    <div className="login">
      <h2 className="form-title">{"Log in with"}</h2>

      { (
        <>
          <div className="social-login">
            <button className="social-button" onClick={() => handleSocialLogin("google")}>
              <img src="Google.png" alt="Google" className="social-icon" />
              Google
            </button>
            <button className="social-button" onClick={() => handleSocialLogin("apple")}>
              <img src="Apple.webp" alt="Apple" className="social-icon" />
              Apple
            </button>
          </div>
          <p className="separator"><span>or</span></p>
        </>
      )}

      <form className="login-form">
        {(
          <div className="input-wrapper">
            <input type="text" placeholder="Username" className="input-field" required />
            <i className="bi bi-person"></i>
          </div>
        )}

        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="input-field" required onChange={handleChange} />
          <i className="bi bi-envelope"></i>
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder="Password" className="input-field" required onChange={handleChange}/>
          <i className="bi bi-lock"></i>
        </div>
        <button className="login-button" onClick={handleSubmit}>Register</button>
      </form>

      <p className="register-text">
        {"Already have an account? "}  
        <a className="register-link" onClick={() => handleLogin()}>
          {" Login"}
        </a>
      </p>
    </div>
    </div>
    </>
  );
};

export default Register