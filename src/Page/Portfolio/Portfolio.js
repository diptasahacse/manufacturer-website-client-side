import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faMobile, faLocation, faBrain } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <div className='py-10'>
            <div className='p-2 max-w-7xl rounded-2xl mx-auto' style={{ backgroundColor: "#F4F8FB" }}>

                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3 flex '>
                        <div className='w-2 mr-2 rounded-md h-full' style={{ backgroundColor: "#1C3244" }}></div>
                        <div className='flex w-full rounded-2xl p-3' style={{ backgroundColor: "#EBEBEB" }}>
                            <div className='ml-3'>
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="https://i.ibb.co/VJrn4Bw/aa.jpg" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='ml-4'>
                                <h3 className='text-4xl font-semibold' style={{ color: "#1C3244" }}>Dipta Saha</h3>
                                <h4 className='text-2xl font-semibold text-primary'>Jr. Front End Developer</h4>
                                <p>Innovative, task-driven professional with 8+ years of experience in web design and development across diverse industries. Equipped with a record of success in consistently identifying and providing the technological needs of companies through ingeniors innovation. Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.</p>

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


                        </div>

                    </div>

                </div>
                <div className='grid grid-cols-4 gap-2 mt-2'>
                    <div className='col-span-3 flex '>
                        <div className='w-2 mr-2 h-full'></div>
                        <div className='w-full p-3'>

                            <p>Content goes here</p>

                        </div>
                    </div>

                    <div>
                        <div className='h-full rounded-2xl p-3 px-4' style={{ backgroundColor: "#EBEBEB" }}>
                            <div>
                                <div className='flex items-center mt-2'>
                                    <span className='text-xl' style={{ color: "#1C3244" }}><FontAwesomeIcon icon={faBrain} /></span>
                                    <h3 className='ml-2 font-bold text-lg' style={{ color: "#1C3244" }}>Skills</h3>
                                </div>

                                <div className='mt-3'>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>HTML5</h3>
                                        <progress class="progress progress-primary w-full" value="96" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>CSS3</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Bootstrap</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Tailwindcss</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Daisy UI</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Javascript</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>ES6</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>React</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Node</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Express</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-semibold'>Mongodb</h3>
                                        <progress class="progress progress-primary w-full" value="95" max="100"></progress>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                <div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;