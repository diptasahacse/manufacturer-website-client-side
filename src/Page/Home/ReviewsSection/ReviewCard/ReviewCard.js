import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ ratingInfo }) => {
    const { rating, des, name, img } = ratingInfo;


    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <span className='text-6xl text-primary'> <FontAwesomeIcon icon={faQuoteLeft} /></span>
                    <p>{des}</p>


                    <div>
                        
                        <span className='text-xl text-primary'> <FontAwesomeIcon icon={faStar} /></span>
                        <span className='text-xl text-primary'> <FontAwesomeIcon icon={faStar} /></span>
                        <span className='text-xl text-primary'> <FontAwesomeIcon icon={faStar} /></span>
                        <span className='text-xl text-primary'> <FontAwesomeIcon icon={faStar} /></span>
                        <span className='text-xl text-primary'> <FontAwesomeIcon icon={faStar} /></span>

                    </div>
                    <div className='flex items-center mt-5'>
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='ml-3 font-bold'>{name}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;