"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Modal from "react-modal";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PAYMENT_KEY)
const CheckOutModal = ({matchingData, mainProductIdes, subtotal, setMatchingProductData}) => {
//    console.log(process.env.NEXT_PUBLIC_PAYMENT_KEY, "this is stripe key")
    return (
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
       <Elements stripe={stripePromise}>
       <CheckoutForm mainProductIdes={mainProductIdes} setMatchingProductData={setMatchingProductData} matchingData={matchingData} subtotal={subtotal}/>
       </Elements>
        </div>
      </dialog>
    );
};

export default CheckOutModal;