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

            <div className='pe-2 '>
                <div className="flex justify-evenly bg-transparent" style={{ position: 'absolute', width: '100%'}}>

                    {
                        !user ?
                            <>
                                <div className="navbar flex justify-between " style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingInline: '1%'

                                }}>
                                    <Link to={'/'}><img src='./public/Logo.jpg' className='w-11' /></Link>

                                    <Link to={'/login'} className='text-decoration-none  text-white text-xl hover:text-zinc-600'>
                                        Sign Up | Log In
                                    </Link>
                                </div>
                            </>
                            :
                            user.isAdmin ?
                                <div className='flex justify-evenly w-[90%] text-3xl' style={{ position: 'relative', paddingInline: '1%', gap: '2%' }} >
                                    <Link to={'/'}>
                                        <i className='bi bi-house' style={{ color: "#fdffef" }}></i>
                                    </Link>
                                    <Link to={'/admin/dashboard'}>
                                        <i className='bi bi-speedometer2' style={{ color: "#fdffef" }}></i>
                                    </Link>
                                    <Link to={'/genres'}>
                                        <i className='bi bi-journal-richtext' style={{ color: "#fdffef" }}></i>
                                    </Link>
                                    {/* <Link to={'/cart'}>
                                        <i className='bi bi-cart' style={{ color: "#fdffef" }}></i>
                                    </Link> */}
                                </div>
                                :
                                <>
                                    <Link to={'/'}>
                                        <i className='bi bi-house text-3xl' style={{ color: "#fdffef" }}></i>
                                    </Link>
                                    <Link to={'/cart'}>
                                        <i className='bi bi-cart text-3xl' style={{ color: "#fdffef" }}></i>
                                    </Link>
                                </>
                    }
                    {
                        user &&
                        <i className='bi bi-box-arrow-right text-3xl' style={{ color: "#fdffef" }} role='button' onClick={handleLogout}></i>
                    }
                </div>
                {/* {msg}, {user1? user1.username : "Guest"} */}
            </div>
        </>
    )
}

export default Header