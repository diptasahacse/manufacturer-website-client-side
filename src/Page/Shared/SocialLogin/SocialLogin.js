import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const [token] = useToken(user?.user?.email);
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
        
    }, [token, from, navigate])

    if (error) {
        toast.error(error.message)

    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full">Continue with google</button>

        </div>
    );
};

export default SocialLogin;