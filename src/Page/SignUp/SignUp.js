import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // Initializatioon
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Handler

    const onSubmit = async (data) => {

    };
    return (
        <div class="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="py-10 px-3 max-w-7xl mx-auto px-3">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    <div>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className=' mb-4'>
                                    <h2 class="card-title text-2xl lg:text-3xl text-primary">Sign Up & Create Your Account</h2>
                                    <p>Signup and be our Customer.</p>
                                </div>


                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Email Full Name */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input
                                            {...register("name",
                                                {
                                                    required: {
                                                        value: true,
                                                        message: "Name is required"
                                                    },
                                                    minLength: {
                                                        value: 5,
                                                        message: 'Min length at least 5'
                                                    }
                                                }
                                            )}
                                            type="text"
                                            placeholder="Your Full Name"
                                            className="input input-bordered w-full"
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                        </label>
                                    </div>
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

                                <p className='text-center mt-2'><small>Already have an account..? <Link className='text-primary' to='/signin'>Sign in</Link> </small></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <h3 className='text-2xl lg:text-6xl font-bold text-white'>Purchase Authentic Products Directly From Authentic Seller.</h3>
                        </div>

                    </div>

                </div>

            </div>
        </div>


    );
};

export default SignUp;