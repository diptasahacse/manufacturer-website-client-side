import React from 'react';

const RequestQuoteSection = () => {
    return (
        <div class="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div class="hero-overlay bg-primary bg-opacity-90"></div>
            <div class="pb-10 lg:pb-0 max-w-7xl mx-auto px-3">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='pt-10'>
                        <p className='font-bold text-lg'>Dedicated Customer Teams & An Agile Services</p>
                        <h3 className='font-bold text-5xl text-white'>Serving Impressive List Of Long Term Clients!</h3>
                        <p className='font-bold text-lg mt-7 text-white'>Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience and expertise in multiple industries, as one of the World’s leading Corporation!</p>
                    </div>
                    <div>
                        <div class="card bg-white shadow-xl lg:mt-[-50px] lg:mb-[-50px]">
                            <div class="card-body">
                                <h2 class="card-title">Request A Quote</h2>
                                <p className='text-lg text-gray-500'>Complete control over products allows us to ensure our customers receive the best quality prices and service.</p>
                                <div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" class="input focus:outline-primary input-bordered" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" class="input focus:outline-primary input-bordered" />
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone</span>
                                        </label>
                                        <input type="tel" placeholder="Phone" class="input focus:outline-primary input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Message</span>
                                        </label>
                                        <textarea placeholder='Message' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                                    </div>

                                    <button class="btn mt-5 btn-primary">Submit</button>
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