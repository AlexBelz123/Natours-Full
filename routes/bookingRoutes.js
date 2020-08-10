const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/checkout-session/:tourId')
  .get(bookingController.getCheckoutSession)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);
  
router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

module.exports = router;
