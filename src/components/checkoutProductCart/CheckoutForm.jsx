'use client'
import useAxiosSecure from "@/lib/hooks/apiHooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ mainProductIdes, matchingData, subtotal}) => {
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState()
  const stripe = useStripe();
  const elements = useElements();
const axiosSecure = useAxiosSecure()
const session = useSession()
// console.log(session)
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      })

       if (error) {
        console.log('[error]', error)
        // setCardError(error.message)
        setProcessing(false)
        return
      } else {
        // console.log('[PaymentMethod]', paymentMethod)
        setCardError('')
      }

      const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: session?.data?.user?.email,
            name: session?.data?.user?.name
          },
        },
      })

      if (confirmError) {
        // console.log(confirmError)
        setCardError(confirmError.message)
        setProcessing(false)
        return
      }
     console.log(paymentIntent)
     if (paymentIntent.status === 'succeeded') {
        const paymentInfo = {
            productInfo : matchingData,
            transactionId: paymentIntent.id,
             date: new Date(),
             paymentIntent_status: 'succeeded',
             buyerEmail:session?.data?.user?.email
         }

         try {
            const { data } = await axiosSecure.put(`/checkout/api/payment-history/?mainProductIdes=${mainProductIdes}`, paymentInfo)
            console.log(data)
         } catch (error) {
            console.log(error)
         }
     }
  };

  const getClientSecret = async ( price )=> {
    console.log(typeof price, "this is price")
    const { data } = await axiosSecure.post(`/checkout/api/create-payment-intent/?subtotal=${price}`) 
    // console.log('clientSecret from server--->', data)
    setClientSecret(data.clientSecret)
  }
  useEffect(()=>{
    if (subtotal) {
        getClientSecret(subtotal)
    }
  },[subtotal])
  return (
    <form onClick={handelSubmit} className="space-y-5">
      <div>
        <label className="">Enter Your Card Number:</label>
        <div className="border p-4 border-accent w-full max-w-xs rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <div className="flex mt-2 justify-around">
        <button
          //    || processing
        //   disabled={!stripe || !clientSecret}
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          {/* {processing ? (
               <ImSpinner9 className='animate-spin m-auto' size={24} />
             ) : (
               `Pay ${registrationInfo?.price}`
             )} */}
          pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
