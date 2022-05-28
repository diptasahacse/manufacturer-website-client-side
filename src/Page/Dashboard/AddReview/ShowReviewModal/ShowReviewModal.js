import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ShowReviewModal = ({ selectedShowOrder }) => {
    const { productName, review } = selectedShowOrder;
    const { feedback, star } = review;
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
            <input type="checkbox" id="show-review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="show-review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Your review for <span className='text-primary'>{productName}</span> product</h3>
                    <div>
                        {
                            starRating
                        }

                    </div>
                    <div className="py-4">
                        <h3 className='text-primary font-semibold'>Feedback</h3>
                        <p>{feedback}</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowReviewModal;