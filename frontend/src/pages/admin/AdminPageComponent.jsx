import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminPageComponent = () => {
    return (
        <>

            <div className="container-fluid p-0">
                <div className="row p-0 m-0">
                    {/*SIde bar*/}
                    <div className="col-3 pl-0" style={{ paddingLeft: "0px", height: "100vh" }}>
                        <div className="d-flex h-100">
                            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "100%" }}>
                                <p
                                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <svg className="bi pe-none me-2" width="40" height="32">
                                        <use></use>
                                    </svg>
                                    <span className="fs-4">Sidebar</span>
                                </p>
                                <hr />
                                <ul className="nav nav-pills flex-column mb-auto">
                                    <li className="nav-item">
                                        <a href="frontend/src#" className="nav-link active" aria-current="page">
                                            <svg className="bi pe-none me-2" width="16" height="16">
                                                <use></use>
                                            </svg>
                                            <Link to="users" style={{ color: "#fff", textDecoration: "none" }}>
                                                Users
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown">
                                    <a href="frontend/src#"
                                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                                            className="rounded-circle me-2" />
                                        <strong>ADMIN</strong>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                        <li><a className="dropdown-item" href="frontend/src#">Settings</a></li>
                                        <li><a className="dropdown-item" href="frontend/src#">Profile</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <hr />
                                        <li><a className="dropdown-item" href="frontend/src#">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>{/*Side bar /end*/}

                    <div className="col-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminPageComponent
