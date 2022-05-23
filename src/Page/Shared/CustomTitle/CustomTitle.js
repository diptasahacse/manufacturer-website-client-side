import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
const CustomTitle = ({ title }) => {
    return (
        <div className='flex items-center justify-center'>
            <span className='mr-2 text-primary text-xl'>
                <FontAwesomeIcon icon={faWrench} />
            </span>
            <h3 className='text-4xl text-center font-semibold'>{title}</h3>
            <span className='ml-2 text-primary text-xl'>
                <FontAwesomeIcon icon={faWrench} />
            </span>
        </div>
    );
};

export default CustomTitle;