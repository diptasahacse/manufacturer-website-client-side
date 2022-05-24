import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
const CustomTitle = ({ title, titleColor, iconColor }) => {
    return (
        <div className='flex items-center justify-center'>
            <span  style={{ "color": `${iconColor}` }}  className='mr-2 text-primary text-xl'>
                <FontAwesomeIcon icon={faWrench} />
            </span>
            <h3 className='text-xl lg:text-4xl text-center font-semibold' style={{ "color": `${titleColor}` }}>{title}</h3>
            <span style={{ "color": `${iconColor}` }} className='ml-2 text-primary text-xl'>
                <FontAwesomeIcon icon={faWrench} />
            </span>
        </div>
    );
};

export default CustomTitle;