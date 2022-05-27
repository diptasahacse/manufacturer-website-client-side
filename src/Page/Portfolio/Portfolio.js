import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faMobile, faLocation } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <div className='py-10'>
            <div className='p-2 max-w-7xl rounded-2xl mx-auto' style={{ backgroundColor: "#F4F8FB" }}>
                <div>
                    {/* <div className='w-2 rounded-md h-full' style={{ backgroundColor: "#1C3244" }} >
                    </div> */}




                </div>
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3 flex '>
                        <div className='w-2 mr-2 rounded-md h-full' style={{ backgroundColor: "#1C3244" }}></div>
                        <div className='flex w-full rounded-2xl p-3' style={{ backgroundColor: "#EBEBEB" }}>
                            <div className='ml-3'>
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=92310" />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h3 className='text-4xl font-semibold' style={{ color: "#1C3244" }}>Dipta Saha</h3>
                                <h4 className='text-2xl font-semibold text-primary'>Jr. Front End Developer</h4>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='h-full rounded-2xl text-white p-3' style={{ backgroundColor: "#1C3244" }}>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>diptasaha.lpu.cse@gmail.com</span>
                                </div>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faMobile} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>+8801613146412</span>
                                </div>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon={faLocation} /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>Khulna, Bangladesh</span>
                                </div>
                            </div>
                            <div className='flex items-center mb-3'>
                                <div className='bg-primary h-9 w-9 flex justify-center items-center rounded-full'>
                                    <span className='text-lg'><FontAwesomeIcon icon='fa-brands fa-github' /></span>
                                </div>
                                <div className='ml-2'>
                                    <span>diptasahacse</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;