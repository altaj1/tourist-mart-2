"use client"
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Modal from "react-modal";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PAYMENT_KEY)
const CheckOutModal = () => {
   console.log(process.env.NEXT_PUBLIC_PAYMENT_KEY, "this is stripe key")
    return (
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    );
};

export default CheckOutModal;