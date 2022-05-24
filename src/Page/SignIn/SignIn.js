import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {
    // Initializatioon
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Handler

    const onSubmit = async (data) => {

    };
    return (
        <div style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className='py-10 px-3 max-w-7xl mx-auto px-3'>
                <div className='grid grid-cols-2 gap-20'>
                    <div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className=' mb-4'>
                                    <h2 class="card-title text-3xl text-primary">Sign Up & Create Your Account</h2>
                                    <p><Link className='text-primary font-bold' to='/register'>Join us</Link> and Be our Customers.</p>
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

                                    {/* Password Input */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            {...register("password",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Password is required"
                                                    },
                                                    minLength: {
                                                        value: 8,
                                                        message: 'Provide provide at least 8 characters'
                                                    }
                                                }
                                            )}
                                            type="password"
                                            placeholder="Your Password"
                                            className="input input-bordered w-full"
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    {/* {
                                        signUpError && signUpError
                                    } */}
                                    <input className='btn btn-primary w-full' type="submit" value='Register' />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <h3 className='text-6xl font-bold text-white'>Purchase Authentic Products Directly From Authentic Seller.</h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignIn;