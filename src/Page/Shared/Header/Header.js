import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const singOutHandler = () => {
        signOut(auth);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-transparent border-b-4 border-primary'>
            <div className='max-w-7xl mx-auto'>
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                {/* Start Dropdown */}
                                {user ?
                                    <li tabindex="0">
                                        <a className='text-primary font-bold'>
                                            {user?.displayName}
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-base-100">
                                            <li><button className='text-red-500' onClick={singOutHandler}>Sign out</button></li>
                                        </ul>
                                    </li>
                                    :
                                    <li><Link to='/signin'>Sign In</Link></li>
                                }
                                {/* End Dropdown */}
                            </ul>
                        </div>
                        <Link to='/' className='btn btn-ghost text-primary normal-case text-2xl'>useTools</Link>
                    </div>
                    <div class="navbar-end hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            {/* Start Dropdown */}
                            {user ?
                                <li tabindex="0">
                                    <a className='text-primary font-bold'>
                                        {user?.displayName}
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 bg-base-100">
                                        <li><button className='text-red-500' onClick={singOutHandler}>Sign out</button></li>
                                    </ul>
                                </li>
                                :
                                <li><Link to='/signin'>Sign In</Link></li>
                            }
                            {/* End Dropdown */}






                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;