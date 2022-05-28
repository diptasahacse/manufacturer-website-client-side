import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isAdmin, adminLoading] = useAdmin(user?.email);


    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div className='lg:px-3 max-w-7xl mx-auto'>
                <div className="drawer drawer-mobile">
                    <input id="my-dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col p-3 lg:p-10" style={{ backgroundColor: "#F4F8FB" }}>
                        {/* <!-- Page content here --> */}
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 pr-0 overflow-y-auto w-60 bg-secondary text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li className='font-bold mb-2 text-accent'> <Link to='/dashboard'>My Profile</Link> </li>
                            {
                                isAdmin || <>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/myorders'>My Orders</Link> </li>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/addreview'>Add Review</Link> </li>

                                </>
                            }


                            {
                                isAdmin && <>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/manageadmin'>Manage Admin</Link> </li>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/addproduct'>Add Product</Link> </li>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/manageallorders'>Manage Orders</Link> </li>
                                    <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/manageproducts'>Manage Products</Link> </li>
                                </>
                            }

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;