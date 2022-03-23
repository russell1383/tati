import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignInComponentsModel from './SignInComponentsModel';
// import SignInComponentsModel from './SignInComponentsModel';

const LoginModal = () => {
    const [openBooking, setBookingOpen] = React.useState(false);
   const handleBookingOpen = () => setBookingOpen(true);
   const handleBookingClose = () => setBookingOpen(false);
    return (
        <div>


            
            <Button onClick={handleBookingOpen}>login</Button>

             <SignInComponentsModel
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                handleBookingOpen={handleBookingOpen}
             >
             </SignInComponentsModel>
        </div>
    );
};

export default LoginModal;