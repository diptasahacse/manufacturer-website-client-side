import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
const ResetPassword = () => {
    // Initializatioon
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Handler
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data.email);
        toast("Reset link sent your email")


    };
    if (error) {
        toast.error(error.message)
    }

    if (sending) {
        return <Loading></Loading>
    }
    return (
        <div className="hero" style={{ backgroundImage: "url(https://i.ibb.co/KDzQ6y8/counter-bg.jpg)" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="py-10 px-3 max-w-7xl mx-auto px-3">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=' mb-4'>
                                    <h2 className="card-title text-2xl lg:text-3xl text-primary">Reset Your Password</h2>
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