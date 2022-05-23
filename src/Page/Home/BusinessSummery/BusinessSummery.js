import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import { faUsers, faHeart, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
const BusinessSummery = () => {
    return (
        <div class="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div class="hero-overlay bg-opacity-90"></div>
            <div class="hero-content text-center text-neutral-content">
                <div className='py-9 px-3 max-w-7xl mx-auto'>
                    <CustomTitle title='Business Summery'></CustomTitle>

                    <div className='grid mt-7 grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-36'>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>273+</p>
                                <p className='text-left text-2xl text-secondary'>Users</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>273+</p>
                                <p className='text-left text-2xl text-secondary'>Tools</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>273+</p>
                                <p className='text-left text-2xl text-secondary'>Feedback</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;