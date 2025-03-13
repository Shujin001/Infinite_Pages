import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, login } from "../api/userApi";
import Swal from "sweetalert2";

const Login = () => {
  let [user, setUser] = useState({})
  const navigate = useNavigate()

  // let theme = useContext(MyThemeContext)

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleRegister = () => {
    navigate('/register')
  }
  const handleForgot = () => {
    navigate('/forgetpassword')
  }
  const handleSubmit = e => {
    e.preventDefault()
    login(user)
    .then(data=>{
      if(data.error){
        Swal.fire("Attention!!!","Email not Registered","warning")
      }
      else{
        authenticate(data)
        if(data.user.isAdmin){
          navigate('/admin/dashboard')
        }
        else{
          navigate('/')
        }
      }
    })
  }


  return (
    <>
      
      <div className='loginmain bg-black'>

        <div className="login">
          <h2 className="form-title">{"Log in with"}</h2>

          {(
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
            <div className="input-wrapper">
              <input type="email" placeholder="Email address" className="input-field" required onChange={handleChange} name={'email'}/>
              <i className="bi bi-envelope"></i>
            </div>

            <div className="input-wrapper">
              <input type="password" placeholder="Password" className="input-field" required onChange={handleChange} name="password"/>
              <i className="bi bi-lock"></i>
            </div>

            <a className="forgot-pass-link" onClick={() => handleForgot()}>Forgot Password?</a>

            <button className="login-button" onClick={handleSubmit}>Login</button>
          </form>

          <p className="register-text">
            {"Don't have an account? "}
            <a className="register-link" onClick={() => handleRegister()}>
              {" Register now"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const handleSocialLogin = (provider) => {
  console.log(`Logging in with ${provider}`);
};

export default Login