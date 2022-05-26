import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import AddReviewModal from './AddReviewModal/AddReviewModal';
import AddReviewTableRow from './AddReviewTableRow/AddReviewTableRow';
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const [selectedOrder, setSelectedOrder] = useState({})

    const { isLoading, data, refetch } = useQuery(['myOrdersForReview'], () =>
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )

    if (loading || isLoading) {
        return <Loading></Loading>
    }


    const addReviewHandlerListener = (id) => {
        const selected = data.find(order => order._id === id);
        setSelectedOrder(selected)
        // console.log(id)

    }

    const allPaidOrderWithNoReview = data.filter(order => order?.paymentStatus && !order?.review)


    return (
        <>
            <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-3xl font-semibold text-primary'>Add Review</h3>


                <div className='mt-1'>
                    <p className='text-xs text-right mb-1'>These are all your paid orders. which you did not give review yet.</p>
                    <div class="overflow-x-auto">
                        <table class="table w-full">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Product Name</th>
                                    <th>Transaction Id</th>
                                    <th>Add Review</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allPaidOrderWithNoReview.map((order, index) => <AddReviewTableRow addReviewHandlerListener={addReviewHandlerListener} index={index} key={order._id} order={order}></AddReviewTableRow>)
                                }

                            </tbody>


                        </table>
                        {
                            Object.keys(selectedOrder).length > 0 && <AddReviewModal setSelectedOrder={setSelectedOrder} selectedOrder={selectedOrder}></AddReviewModal>
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default AddReview;