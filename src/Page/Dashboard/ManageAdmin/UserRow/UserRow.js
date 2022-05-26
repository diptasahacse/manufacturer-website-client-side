import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const UserRow = ({ index, singleUser, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { email } = singleUser;


    const createAdminHandler = (email) => {
        // console.log(email)
        // https://infinite-chamber-43931.herokuapp.com/admin/createAdmin/:email
        // https://infinite-chamber-43931.herokuapp.com/admin/createAdmin/:email

        fetch(`https://infinite-chamber-43931.herokuapp.com/admin/createadmin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        })
            .then(res => {
                // console.log(res)
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully made an admin for ${email}`)

                }

            })

    }
    const removeAdminHandler = (email) => {
        fetch(`https://infinite-chamber-43931.herokuapp.com/admin/removeadmin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {
                    toast.error('Failed to remove an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully remove an admin for ${email}`)

                }

            })

    }




    if (loading) {
        <Loading></Loading>
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className={user.email === email && 'text-primary font-bold'}>{user.email === email ? email + " (You)" : email}  </td>
            <td><button onClick={() => { createAdminHandler(email) }} disabled={singleUser?.role} class="btn btn-xs btn-success">Make Admin</button></td>
            <td><button onClick={() => { removeAdminHandler(email) }} disabled={user.email === email || !singleUser?.role} className='btn btn-xs btn-error'>Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;