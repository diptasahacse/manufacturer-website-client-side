import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RequestQuoteSection = () => {
    return (
        <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className="hero-overlay bg-primary bg-opacity-90"></div>
            <div className="pb-10 lg:pb-0 max-w-7xl mx-auto px-3">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='pt-10'>
                        <p className='font-bold text-lg'>Dedicated Customer Teams & An Agile Services</p>
                        <h3 className='font-bold text-2xl lg:text-5xl text-white'>Serving Impressive List Of Long Term Clients!</h3>
                        <p className='font-bold lg:text-lg mt-7 text-white'>Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience and expertise in multiple industries, as one of the World’s leading Corporation!</p>

                        <button className='btn btn-outline btn-accent mt-12'>Join Now
                        <span className='ml-3'><FontAwesomeIcon icon={faArrowRight} /></span>
                        </button>
                    </div>
                    <div>
                        <div className="card bg-base-200 shadow-xl lg:mt-[-50px] lg:mb-[-50px]">
                            <div className="card-body">
                                <h2 className="card-title">Request A Quote</h2>
                                <p className='text-lg text-gray-500'>Complete control over products allows us to ensure our customers receive the best quality prices and service.</p>
                                <div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input focus:outline-primary input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input focus:outline-primary input-bordered" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="tel" placeholder="Phone" className="input focus:outline-primary input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea placeholder='Message' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                                    </div>

                                    <button className="btn mt-5 btn-primary">Submit Request</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RequestQuoteSection;