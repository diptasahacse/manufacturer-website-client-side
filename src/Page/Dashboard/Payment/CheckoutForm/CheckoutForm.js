import React, { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
const CheckoutForm = ({ orderInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    const { totalPrice, address, customerEmail, customerName, phone, productName, _id } = orderInfo;
   

    useEffect(() => {
        fetch('https://manufacturer-website-server-side-7dah.onrender.com/create-payment-intent', {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': "application/json"
            },
            body: JSON.stringify({ price: totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)

                }
            })

    }, [totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            toast.error(error.message)
        }


        // Confirm Card Payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail,
                        address: address,
                        phone: phone

                    },
                },
            },
        );
        if (intentError) {
            toast.error(intentError.message);
        }
        else {
            
            toast('Your payment is successfully completed.')


            const payment = {
                transactionId: paymentIntent.id,
                orderId: _id,
                customerEmail,
                totalPrice
            }
            // Store status in database
            fetch(`https://manufacturer-website-server-side-7dah.onrender.com/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    'content-type': "application/json"
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })






        }




    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;