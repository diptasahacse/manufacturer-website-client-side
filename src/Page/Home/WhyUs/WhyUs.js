import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const WhyUs = () => {
    return (
        <div className='py-10 pt-24 bg-accent'>
            <div className='px-3 max-w-7xl mx-auto'>
                <CustomTitle iconColor='#FF5F14' titleColor='#333333' title='Why Us!'></CustomTitle>

                <p className='text-center text-gray-500 mt-5'>We continue to pursue that same vision in today's complex, uncertain world, working every day to earn our customers’ trust! During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world.</p>


                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div>
                        <div className='flex border p-5 h-full why-us-card'>
                            <span className='mr-3 mt-2 text-primary'>
                                <FontAwesomeIcon className='text-2xl' icon={faCheck} />
                            </span>
                            <div>
                                <h2 className='font-bold text-xl'>Quality Control System</h2>
                                <p className='mt-4 text-gray-400'>We enhance our industry operations by relieving you of the worries associated with freight forwarding.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex border p-5 h-full  why-us-card'>
                            <span className='mr-3 mt-2 text-primary'>
                                <FontAwesomeIcon className='text-2xl' icon={faCheck} />
                            </span>
                            <div>
                                <h2 className='font-bold text-xl'>Highly Professional Staf</h2>
                                <p className='mt-4 text-gray-400'>We are one of the Nations largest automotive parts recyclers and a widely recognized leader utilizing advanced.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex border p-5 h-full  why-us-card'>
                            <span className='mr-3 mt-2 text-primary'>
                                <FontAwesomeIcon className='text-2xl' icon={faCheck} />
                            </span>
                            <div>
                                <h2 className='font-bold text-xl'>100% Satisfaction Guarantee</h2>
                                <p className='mt-4 text-gray-400'>An integrated approach to providing engineering services allows our clients to benefit from the commercial and logistical.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex border p-5 h-full  why-us-card'>
                            <span className='mr-3 mt-2 text-primary'>
                                <FontAwesomeIcon className='text-2xl' icon={faCheck} />
                            </span>
                            <div>
                                <h2 className='font-bold text-xl'>Accurate Testing Processes</h2>
                                <p className='mt-4 text-gray-400'>We’ll work with you on your project, large or small. Together we’ll fine-tune your new construction, remodeling or renovation.</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default WhyUs;