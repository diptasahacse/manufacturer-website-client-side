import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow/UserRow';

const ManageAdmin = () => {


    const { isLoading, error, data, refetch } = useQuery('alluser', () =>
        fetch('https://infinite-chamber-43931.herokuapp.com/user', {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        )
    )
    // console.log(data)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>All Users</h3>
            <div className='mt-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Create Admin</th>
                                <th>Remove Admin</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((singleUser, index) => <UserRow key={singleUser._id} refetch={refetch} index={index} singleUser={singleUser}></UserRow>)

                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageAdmin;