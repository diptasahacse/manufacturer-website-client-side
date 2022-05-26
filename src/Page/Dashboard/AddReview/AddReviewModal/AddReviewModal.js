import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReviewModal = ({ selectedOrder }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [star, setStar] = useState(0)

    const valueChangeListener = (event) => {
        setStar(Number(event.target.value))

    }

    const onSubmit = (data) => {
        console.log(data)


    };
    return (
        <div>
            <input type="checkbox" id="add-review-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="add-review-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Add feedback for <span className='text-primary'>{selectedOrder.productName}</span></h3>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Star Number */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Give Start out of 5</span>
                                </label>
                                <input
                                    {...register("star",
                                        {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            }

                                        }
                                    )}
                                    onChange={valueChangeListener}
                                    type="number"
                                    placeholder="Give 0 to 5"
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.star?.type === 'required' && <span className="label-text-alt text-red-600">{errors.star.message}</span>}
                                    {(star >= 0 && star <= 5) || <span className="label-text-alt text-red-600">Star value should be between 0 to 5</span>}

                                </label>
                            </div>
                            {/* Feedback */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea {
                                    ...register("feedback",
                                        {
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            }

                                        }
                                    )
                                } placeholder='Message' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                                <label className="label">
                                    {errors.feedback?.type === 'required' && <span className="label-text-alt text-red-600">{errors.feedback.message}</span>}

                                </label>
                            </div>





                            {
                                (star >= 0 && star <= 5) && <input className='btn btn-primary w-full' type="submit" value='Send Feedback' />
                            }



                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReviewModal;