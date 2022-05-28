import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ ratingInfo, customerName }) => {
    const { star, feedback } = ratingInfo;
    let starRating;



    if (Number(star) === 5) {
        starRating = <div>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
        </div>

    }
    else if (Number(star) === 4) {
        starRating = <div>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span><FontAwesomeIcon icon={faStar} /></span>
        </div>

    }
    else if (Number(star) === 3) {
        starRating = <div>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
        </div>

    }
    else if (Number(star) === 2) {
        starRating = <div>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
        </div>

    }
    else if (Number(star) === 1) {
        starRating = <div>
            <span className='text-primary'><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
        </div>


    }
    else {
        starRating = <div>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
            <span ><FontAwesomeIcon icon={faStar} /></span>
        </div>

    }


    return (
        <div>
            <div class="card bg-base-100 shadow-xl h-full">
                <div class="card-body">
                    <span className='text-6xl text-primary'> <FontAwesomeIcon icon={faQuoteLeft} /></span>
                    <p>{feedback.length > 120 ? feedback.slice(0, 120)+'...' : feedback}</p>


                    <div>

                        :{
                            starRating
                        }

                    </div>
                    <div className='flex items-center mt-5'>
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='https://i.ibb.co/6tx0kNh/user.png' alt='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='ml-3 font-bold'>{customerName}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;