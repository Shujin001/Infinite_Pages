import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'

const AdminSidebar = () => {
    let user = useContext(UserContext)

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-[#293b47] text-white">
                <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg> */}
                    <img src="/public/Logo.jpg" alt="Logo" className='w-10' />
                    <span className="fs-4 text-white">Infinite Pages</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link-body-emphasis  text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg> */}
                            <i className='bi bi-house text-white pr-1'></i>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link link-body-emphasis  text-white ">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2"/></svg> */}
                            <i className='bi bi-speedometer2 text-white pr-1'></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/genre" className="nav-link link-body-emphasis text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
                            <i className='bi bi-journal-richtext text-white pr-1'></i>
                            Genres
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/books" className="nav-link link-body-emphasis text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
                            <i className='bi bi-book text-white pr-1'></i>
                             Books
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle text-white pr-1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='bi bi-person'></i>
                        {user? user.username : "Guest"}
                    </Link>
                    <ul className="dropdown-menu text-small shadow">
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default AdminSidebar