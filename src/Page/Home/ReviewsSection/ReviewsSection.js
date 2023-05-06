import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import Loading from '../../Shared/Loading/Loading';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewsSection = () => {
    const [allOrder, setAllOrder] = useState([])

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_SERVER_API_KEY}/orders`)
    //         .then(res => res.json())
    //         .then(data => setAllOrder(data))
    // }, [])


    const { isLoading, data, refetch } = useQuery(['allOrdersForReview'], () =>
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/orders`, {
            method: "GET"
        }).then(res =>
            res.json()
        )
    )

    if(isLoading){
        return <Loading></Loading>
    }

    const orderWithReview = data.filter(order => order?.review)
    

    return (
        <div className='py-10 bg-primary'>
            <div className='px-3 max-w-7xl mx-auto'>
                <CustomTitle iconColor='#E6E6E6' titleColor='#E6E6E6' title='My All Review'></CustomTitle>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        orderWithReview.map(rating => <ReviewCard key={rating._id} customerName={rating.customerName} ratingInfo={rating?.review}></ReviewCard>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ReviewsSection;