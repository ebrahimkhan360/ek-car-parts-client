import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-600'>Your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-46 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                    <li>{admin && <Link to="/dashboard/users">All Users</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;