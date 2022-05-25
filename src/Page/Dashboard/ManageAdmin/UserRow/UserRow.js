import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const UserRow = ({ index, singleUser }) => {
    const [user, loading, error] = useAuthState(auth);
    const { email } = singleUser;


    const createAdminHandler = () => {

    }
    const removeAdminHandler = () => {

    }




    if (loading) {
        <Loading></Loading>
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className={user.email === email && 'text-primary font-bold'}>{user.email === email ? email + " (You)" : email}  </td>
            <td><button onClick={createAdminHandler} disabled={singleUser?.role} class="btn btn-xs btn-success">Make Admin</button></td>
            <td><button onClick={removeAdminHandler} disabled={user.email === email || !singleUser?.role} className='btn btn-xs btn-error'>Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;