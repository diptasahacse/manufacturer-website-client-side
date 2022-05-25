import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-20'>
            <div className='px-5 max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h3 className='text-5xl font-bold text-primary'>404 Not Found</h3>
                    <p>The Page you are looking for can not be found.</p>
                    <Link className='btn btn-primary' to='/'>Home</Link>
                </div>

            </div>


        </div>
    );
};

export default NotFound;