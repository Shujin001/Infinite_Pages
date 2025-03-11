import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, login } from '../api/userApi'
import { MyThemeContext } from '../App'

const Login = () => {
  let [user, setUser] = useState({})
  const navigate = useNavigate()

  let theme = useContext(MyThemeContext)

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(user)
    .then(data=>{
      if(data.error){
        alert(data.error)
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
        <main className={`${theme==='dark'?'dark-':''}mybg
          form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5`}>
  <form>
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal text-xl md:text-5xl">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} name={'email'}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating py-1">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name="password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
    <div className="case2 py-2 flex justify-between">
    <Link  to={'/forgetpassword'} className="underline">Forgot Password?</Link>
    <Link  to={'/register'} className="underline">Register</Link> 
    </div>
    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017-2024</p>
  </form>
</main>
    </>
  )
}

export default Login