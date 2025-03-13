import React from 'react'
import doors from '../public/door.jpg'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
    <div className='home' style={{
      backgroundImage:`url(${doors})`,
      height:'100vh',
      textAlign:'center',
      alignContent: 'center',
      backgroundSize:'cover',
      }} >
  <Link to={'/services'} className='text-center text-decoration-none h2 hover:brightness-150 font-serif'>
  Enter Library</Link>
  </div>
    </>
  )
}

export default HomePage