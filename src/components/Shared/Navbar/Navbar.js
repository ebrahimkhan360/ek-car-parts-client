import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/1.gif'
import auth from '../../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/myTools'>Buy Now</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>

                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }

                        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Log Out</button> : <Link to='login'>Log In</Link>}</li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost text-xl text-bold">
                    <img src={logo} alt="" className='w-12' />
                    <h2 className='font-bold ml-2'>EK CAR PARTS</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/myTools'>Buy Now</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>

                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }

                    <li>{user ? <button className="btn btn-ghost" onClick={logout} >Log Out</button> : <Link to='login'>Log In</Link>}</li>
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;