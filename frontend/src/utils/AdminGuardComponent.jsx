import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAdminUser } from '../services/auth.service'

const AdminGuardComponent = ({ children }) => {
    console.log(isAdminUser())
    return (
        isAdminUser() ? children : <Navigate to={"/"} />
    )
}

export default AdminGuardComponent
