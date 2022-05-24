import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div>
            <div className='px-3 max-w-7xl mx-auto'>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        {/* <!-- Page content here --> */}
                        <Outlet></Outlet>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 pr-0 overflow-y-auto w-60 bg-secondary text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li className='font-bold mb-2 text-accent'> <Link to='/dashboard'>My Profile</Link> </li>
                            <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/myorders'>My Orders</Link> </li>
                            <li className='font-bold mb-2 text-accent'> <Link to='/dashboard/addreview'>Add Review</Link> </li>
                            
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;