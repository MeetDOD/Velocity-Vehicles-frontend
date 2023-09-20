import React from 'react'
import AdminMenu from './AdminMenu'
import { useAuth } from '../context/auth'

const AdminDashboard = () => {
    const [auth] = useAuth()

    return (
        <div className='container marginStyle'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 my-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h3 className='text-center'>Welcome, {auth?.user?.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
