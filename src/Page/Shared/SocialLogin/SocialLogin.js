import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const SocialLogin = () => {
    const signInWithGoogle = () => {

    }
    return (
        <div>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-full">Continue with google</button>

        </div>
    );
};

export default SocialLogin;