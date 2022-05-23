import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/VYhh93J/banner.jpg)" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="text-white max-w-7xl mx-auto">
                <div className='px-3'>
                    <h1 class="mb-5 text-4xl md:text-7xl font-bold">Global Standards In
                        <br />
                        Industrial Contracting
                    </h1>
                    <p class="mb-5 text-xl">  We produce positive results from ever-growing Industrial & manufacturing estates, we have established a corporate mandate to maintain strong core values.  </p>
                    <button class="btn btn-primary">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;