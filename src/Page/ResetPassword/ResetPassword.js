import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    // Initializatioon
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Handler

    const onSubmit = async (data) => {

    };
    return (
        <div class="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="py-10 px-3 max-w-7xl mx-auto px-3">

                <div className='grid grid-cols-2 gap-20'>
                    <div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className=' mb-4'>
                                    <h2 class="card-title text-3xl text-primary">Reset Your Password</h2>
                                    <p>Enter your email and reset your password.</p>
                                </div>
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* Email Input */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            {...register("email",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required"
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: 'Provide valid email'
                                                    }
                                                }
                                            )}
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full"
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <input className='btn btn-primary w-full' type="submit" value='Send Reset Link' />
                                </form>

                                <p className='text-center mt-2'><small>Password reset done..? <Link className='text-primary' to='/signin'>Sign in</Link> </small></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src='https://i.ibb.co/mqtX9M5/forget.gif' alt="forget" />
                        </div>

                    </div>

                </div>

            </div>
        </div>




    );
};

export default ResetPassword;