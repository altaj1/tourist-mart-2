import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = ({mainProductIdes, matchingData}) => {
    const handelSubmit = async (event)=>{

    }
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
           {/* <button
             disabled={!stripe || !clientSecret || processing}
             type="submit"
             className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
           >
             {processing ? (
               <ImSpinner9 className='animate-spin m-auto' size={24} />
             ) : (
               `Pay ${registrationInfo?.price}`
             )}
             pay
           </button> */}
           
         </div>
       </form>
    );
};

export default CheckoutForm;