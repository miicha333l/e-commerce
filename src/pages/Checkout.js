// src/pages/Checkout.js
import React from 'react';
import PaymentForm from '../components/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QIzmzIzJm8oUWH4IVtYGtxxtNkgAjF0RVGqrHn2ZO0BVOT9tsy3kXfnr4jlTbsItwjlUUTdecZ0Wd79vFp3fDqa00HCgtBbKt');

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <h1>Page de Paiement</h1>
      <PaymentForm />
    </Elements>
  );
}

export default Checkout;
