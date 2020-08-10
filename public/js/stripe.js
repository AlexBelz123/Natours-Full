import axios from 'axios';
import { showAlert } from './alerts';


export const bookTour = async tourId => {
  
  const stripe = Stripe(
    'pk_test_51HDuSqBK2SfRsc62w3uSr6ATOns8ADARRSXiplh3AAx4KcVuY2jHTU5SG7n0toD0zVrfqfxWy02hbJsEbwBCWrhf004Cky8QjH'
  );

  try {
    //  1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    //  2) Create checkout form & charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
