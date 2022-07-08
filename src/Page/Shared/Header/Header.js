import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const singOutHandler = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-transparent border-b-4 border-primary'>
            <div className='max-w-7xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                {/* Start Dropdown */}
                                {user ?
                                    <li><button className='text-red-500' onClick={singOutHandler}>Sign out</button></li>
                                    :
                                    <li><Link to='/signin'>Sign In</Link></li>
                                }
                                {/* End Dropdown */}
                            </ul>
                        </div>
                        <Link to='/' className='btn btn-ghost text-primary normal-case text-2xl'>useTools</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            {/* Start Dropdown */}
                            {user ?
                                <li><button className='text-red-500' onClick={singOutHandler}>Sign out</button></li>
                                :
                                <li><Link to='/signin'>Sign In</Link></li>
                            }
                            {/* End Dropdown */}






                        </ul>
                    </div>

                    <div className="navbar-end lg:hidden">
                        <label htmlFor="my-dashboard-drawer" tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;