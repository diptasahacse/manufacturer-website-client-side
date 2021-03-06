import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
const SignUp = () => {
    // Initialization
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();




    useEffect(() => {
        if (error || updateError) {
            toast.error(error?.message || updateError?.message)

        }
        if (user) {
            toast('Your Account created successfully.. Please Login')
            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/signin');


        }

    }, [error, updateError, navigate, user])

    // Handler
    const onSubmit = async (data) => {

        const displayName = data.name;
        const email = data.email;
        const password = data.password;

        // Create use
        await createUserWithEmailAndPassword(email, password);
        // Set name
        await updateProfile({ displayName })


    };

   


    if (loading || updating) {
        return <Loading></Loading>

    }
    return (
        <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="py-10 px-3 max-w-7xl mx-auto">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=' mb-4'>
                                    <h2 className="card-title text-2xl lg:text-3xl text-primary">Sign Up & Create Your Account</h2>
                                    <p>Signup and be our Customer.</p>
                                </div>


                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Full Name */}
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
                                                        message: 'Name should long at least 5'
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
                                                        message: 'Please provide a valid email'
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
                                                        message: 'Password length should least 8 characters'
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

                                    <input className='btn btn-primary w-full' type="submit" value='Register' />
                                </form>

                                <p className='text-center mt-2'><small>Already have an account..? <Link className='text-primary' to='/signin'>Sign in</Link> </small></p>

                                <div>
                                    <SocialLogin></SocialLogin>
                                </div>
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