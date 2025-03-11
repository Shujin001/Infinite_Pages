import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'

const AdminSidebar = () => {
    let user = useContext(UserContext)

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg> */}
                    <i className='bi bi-home bi-house'></i>
                    <span className="fs-4">Our Store</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg> */}
                            <i className='bi bi-house'></i>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link link-body-emphasis">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2"/></svg> */}
                            <i className='bi bi-speedometer2'></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/genre" className="nav-link link-body-emphasis">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
                            <i className='bi bi-journal-richtext'></i>
                            Genres
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/books" className="nav-link link-body-emphasis">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
                            <i className='bi bi-book'></i>
                             Books
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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