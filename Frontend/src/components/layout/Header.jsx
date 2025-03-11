import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, logout } from '../../api/userApi'
import MyContext from '../MyContext'
import UserContext from '../UserContext'

const Header = () => {
    let { user } = isAuthenticated()
    const navigate = useNavigate()

    let msg = useContext(MyContext)
    let user1 = useContext(UserContext)


    const handleLogout = (e) => {
        logout()
        navigate('/login')
    }

    return (
        <>

            <div className='pe-2'>
                <div className="col-12 col-md-3 d-flex justify-content-evenly fs-4 py-1">

                    {
                        !user ?
                            <>
                                <div className="pr-6 pl-6 pt-2 flex justify-between items-center bg-transparent" style={{
                                    position: 'absolute',
                                    width: '100%'
                                }}
                                >
                                    <Link to={'/'}><img src='./public/logo.jpg' className='w-10 bg-blend-normal' /></Link>
                                    <div className='flex gap-4'>
                                        <Link to={'/register'} className='text-decoration-none font-semibold'>
                                            Sign Up
                                        </Link>
                                        <Link to={'/login'} className='text-decoration-none font-semibold'>
                                            Log In
                                        </Link>
                                    </div>
                                </div>
                            </>
                            :
                            user.isAdmin ?
                                <>
                                    <Link to={'/admin/dashboard'}>
                                        <i className='bi bi-speedometer2'></i>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={'/cart'}>
                                        <i className="bi bi-cart"></i>
                                    </Link>
                                </>
                    }
                    {
                        user &&
                        <i className='bi bi-box-arrow-right' role='button' onClick={handleLogout}></i>
                    }
                </div>
                {msg}, {user1? user1.username : "Guest"}
            </div>
        </>
    )
}

export default Header