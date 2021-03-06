import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    let location = useLocation()

    const [isAdmin, adminLoading] = useAdmin(user?.email);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!isAdmin || !user) {
        toast.error("We have noticed you have tried to visit Admin page. Where you don't have access. If i'm wrong then first visit Home page. then come here.")
        localStorage.removeItem('accessToken')
        signOut(auth)
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;