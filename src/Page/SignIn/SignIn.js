import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignIn = () => {
    // Initialization
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user?.user?.email);

    
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (user) {
            if (token) {
                navigate(from, { replace: true });
            }
            else {
                localStorage.removeItem('accessToken')
                signOut(auth);
            }

        }
        if (error) {
            toast.error(error.message)
        }

    }, [token, from, navigate, error])
   


    if (loading) {
        return <Loading></Loading>

    }






    // Handler
    const onSubmit = async (data) => {
        signInWithEmailAndPassword(data.email, data.password)

    };


    return (
        <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="py-10 px-3 max-w-7xl mx-auto px-3">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=' mb-4'>
                                    <h2 className="card-title text-2xl lg:text-3xl text-primary">Sign In & Enter Your Account</h2>
                                    <p>Sign in and purchase you product.</p>
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


                                    <div className='mb-2'>
                                        <Link to='/resetpassword' className='link text-sm text-red-600'>Forgot Password..?</Link>
                                    </div>

                                    <input className='btn btn-primary w-full' type="submit" value='Signin' />


                                </form>
                                <p className='text-center mt-2'><small>New here..? <Link className='text-primary' to='/register'>Register</Link> </small></p>

                                <div>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <div className='mb-10 text-white border p-2'>
                                <h3 className='font-bold text-primary'>Admin Access Info</h3>
                                <p className='font-light text-sm'>Email: diptasaha.lpu.cse@gmail.com</p>
                                <p className='font-light text-sm'>Password: 123456789</p>
                            </div>
                            <h3 className='text-2xl lg:text-6xl font-bold text-white'>Purchase Authentic Products Directly From Authentic Seller.</h3>
                        </div>

                    </div>

                </div>

            </div>
        </div>




    );
};

export default SignIn;