import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import AddReviewModal from './AddReviewModal/AddReviewModal';
import AddReviewTableRow from './AddReviewTableRow/AddReviewTableRow';
import ShowReviewModal from './ShowReviewModal/ShowReviewModal';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);



    const [selectedOrder, setSelectedOrder] = useState({})
    const [selectedShowOrder, setSelectedShowOrder] = useState({})

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
        refetch()

    }
    const showReviewHandlerListener = (id) => {
        const selected = data.find(order => order._id === id);
        setSelectedShowOrder(selected)


    }

    const allPaidOrders = data.filter(order => order?.paymentStatus)

   


    return (
        <>
            <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-3xl font-semibold text-primary'>Add Review</h3>


                <div className='mt-1'>
                    {
                        allPaidOrders.length > 0 ? <>
                            <div>
                                <p className='text-xs text-right mb-1'>These are all your Pending and Shipped orders. (Please wait for add review till your order is not shipped)</p>
                                <div className="overflow-x-auto">
                                    <table className="table w-full">

                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Product Name</th>
                                                <th>Transaction Id</th>
                                                <th>Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                allPaidOrders.map((order, index) => <AddReviewTableRow showReviewHandlerListener={showReviewHandlerListener} addReviewHandlerListener={addReviewHandlerListener} index={index} key={order._id} order={order}></AddReviewTableRow>)
                                            }

                                        </tbody>


                                    </table>
                                </div>
                            </div>
                        </>
                            :
                            <p className='text-center mt-5'>You don't have any paid orders. Please first pay your order then come here to write review.</p>
                    }

                    <div>
                        {
                            Object.keys(selectedOrder).length > 0 && <AddReviewModal refetch={refetch} setSelectedOrder={setSelectedOrder} selectedOrder={selectedOrder}></AddReviewModal>
                        }
                        {
                            Object.keys(selectedShowOrder).length > 0 && <ShowReviewModal  selectedShowOrder={selectedShowOrder}></ShowReviewModal>
                        }
                    </div>
                </div>

            </div>


        </>
    );
};

export default AddReview;