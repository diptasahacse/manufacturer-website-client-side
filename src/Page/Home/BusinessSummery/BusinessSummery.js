import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import { faUsers, faHeart, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
const BusinessSummery = () => {

    const { isLoading, data, refetch } = useQuery(['businessSummery'], () =>
        fetch(`http://localhost:5000/businesssummery`, {
            method: "GET"
        }).then(res =>
            res.json()
        )
    )


    if (isLoading) {
        return <Loading></Loading>
    }

    const { totalTools, totalUser, totalOrders } = data;


    const orderWithReview = totalOrders.filter(order => order?.review)
    return (
        <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='pt-9 pb-20 px-3 max-w-7xl mx-auto'>

                    <CustomTitle iconColor='#E6E6E6' titleColor='#E6E6E6' title='Business Summery'></CustomTitle>

                    <div className='grid mt-7 grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-36'>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>{totalUser}+</p>
                                <p className='text-left text-2xl text-secondary'>Users</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>{totalTools}+</p>
                                <p className='text-left text-2xl text-secondary'>Tools</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-6xl text-secondary '>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <div className='ml-5'>
                                <p className='font-bold text-5xl text-white'>{orderWithReview.length}+</p>
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