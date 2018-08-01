/* jshint esversion:6 */
// Planning a road trip

let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

if (seatsInCar >= passengers && infantSeats >= infants) {
  console.log('good on seats');
  if (fullTank) {
    console.log('good on gas');
  } // end full tank
  else {
    console.log('make sure to gas up on the way');
  } // end not full
} // end of enough seats
else {
  console.log('not enough room ');
} // end of not enough seats
