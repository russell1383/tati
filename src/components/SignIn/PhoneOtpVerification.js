import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./PhoneOtpVerification.css";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { async } from '@firebase/util';

const PhoneOtpVerification = () => {
    const {setUpRecaptcha} = useAuth();
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [show, setShow] = useState(false);
    // const [confirmObj, setConfirmObj] = useState("");
    const { user } = useAuth();
    const [loggedInUser, setLoggedInUser] = user;
    // const navigate = Navigate();
    const history = useHistory();
    const location = useLocation();

    const getOtp = async (e) => {
        // console.log(data);
        e.preventDefault();
        setError("");
        if (number === "" || number === undefined)
            return setError("please Enter a valid Phone number");
        try {
            const response = await setUpRecaptcha(number);
            console.log(response);
            setLoggedInUser(response);

            // setLoggedInUser(number);
            setShow(true);
            
        } catch (err) {
            setError(err.message);
        }
         console.log(number);
        
    }

    // verify otp 
    const verifyOtp = async (e) => {
        e.preventDefault();
        console.log(otp);
        if (otp === null || loggedInUser === null)
            return;
        try {
            setError("");
            await loggedInUser.confirm(otp).then((result) => {
                const user = result.user;
                console.log(user)
                setLoggedInUser(user);
                const destination = location?.state?.from || '/home'
                history.replace(destination);
              
            })
        }catch (err) {
             setError(err.message);
        }
    }

    return (
        <>
            <div className='p-4 box'>
                <h2 className='mb-2'>Firebase Phone Auth</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                 <div style={{ display: !show ? "block" : "none" }} className="mt-3">
                    <Form onSubmit={getOtp}>
                    <Form.Group className="mb-3 m-2" controlId="formBasicPhoneNumber">
                        <PhoneInput
                            defaultCountry='PH'
                            value={number}
                            onChange={setNumber}
                            placeholder="Enter phone number"
                        />
                        <div id='recaptcha-container'></div>
                    </Form.Group>
                    <div className='button-right'>
                        <Link to="/sign-in">
                             <Button variant='secondary'>Cancel</Button> &nbsp;
                        </Link>
                       
                        <Button variant='primary' type='submit'>Send OTP</Button>

                    </div>
                    </Form>
                </div>
                <div className='' style={{ display: show ? "block" : "none" }}>
                  <Form onSubmit={verifyOtp}>
                    <Form.Group className="mb-3" controlId="formBasicOtp">
                        <Form.Control
                            type="otp"
                             placeholder="Enter Otp"
                             onChange={(e) => { setOtp(e.target.value) }}
                            >
                        </Form.Control>  
                    </Form.Group>
                    <div className='button-right'>
                        <Button variant='primary' type='submit'>Verify OTP </Button>
                    </div>
                    </Form>
                  </div>  
            </div>
        </>
    );
};

export default PhoneOtpVerification;