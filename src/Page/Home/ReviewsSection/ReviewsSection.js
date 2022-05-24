import React, { useEffect, useState } from 'react';
import CustomTitle from '../../Shared/CustomTitle/CustomTitle';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewsSection = () => {
    const [allRating, setAllRating] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setAllRating(data))
    }, [])
    // console.log(allRating)

    return (
        <div className='py-10 bg-primary'>
            <div className='px-3 max-w-7xl mx-auto'>
                <CustomTitle iconColor='#E6E6E6' titleColor='#E6E6E6' title='My All Review'></CustomTitle>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allRating.map(rating => <ReviewCard key={rating.id} ratingInfo={rating}></ReviewCard>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ReviewsSection;