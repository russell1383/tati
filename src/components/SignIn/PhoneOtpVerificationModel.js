import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Alert, Button, Form } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./PhoneOtpVerification.css";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { async } from '@firebase/util';
import OtpInput from 'react-otp-input';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  
};
const inputStyles = {
    width: ' 100%',
    // width: '1rem !important',
    height:' 2.2rem',
    // height: 'inherit',
    border: ' 2px solid',
    borderRadius: ' 15%',
    borderColor: ' #cdcdc,',
    outline: ' none',
    fontsize: ' 2rem',
    textAlign: ' center',
    color: ' #4a4a4a',
    padding: '0 1px'
    
};
const focusStyles = {
     borderColor:'#20c4f4'  
}

const PhoneOtpVerificationModel = ({handleClose,open,handleBookingClose}) => {
    const {setUpRecaptcha,user } = useAuth();
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [show, setShow] = useState(false);
    // const [confirmObj, setConfirmObj] = useState("");
    const [loggedInUser, setLoggedInUser] = user;
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/";
    
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
                history.push(url);
                handleClose();
                handleBookingClose();
            })
        }catch (err) {
             setError(err.message);
        }
    }

    return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
    <Fade in={open}>
     <Box sx={style}>
        <div className='p-4'>
                {error && <Alert variant='danger'>{error}</Alert>}
                {/* number input modal start */}
                <div style={{ display: !show ? "block" : "none" }} className="mt-3">
                <h4 className ='mb-4 text-center'>Number Verification</h4>
                    <Form onSubmit={getOtp}>
                    <Form.Group className="mb-3 m-2" controlId="formBasicPhoneNumber">
                        <PhoneInput
                            defaultCountry='BD'
                            // country="BD"
                            value={number}
                            onChange={setNumber}
                            placeholder="Enter phone number"
                        />
                        <div id='recaptcha-container'></div>
                    </Form.Group>
                    <div className='button-right'>
                        <Link >
                             <Button variant='secondary' onClick={handleClose}>Cancel</Button> &nbsp;
                        </Link>
                       
                            <Button variant='success' type='submit'>Send Code</Button>

                    </div>
                    </Form>
                </div>
                {/* number input modal end*/}
                            
               {/* number otp verification start */}
                            
                <div className='' style={{ display: show ? "block" : "none" }}>
                <Form sx={{mt:3}}  onSubmit={verifyOtp}>
                                <div className=''>
                                    <h5 className ='mb-2 text-center'>Enter Verification Code</h5>
                                    <p className='mb-2 text-center'> SEND OTP : <span className='d-flux justify-content-center align-items-center'>****</span>{number.slice(10)}</p>
                                   
                                     <OtpInput
                                        value={otp}
                                        className="mt-2 otpButton"
                                        // onChange={(e) => { setOtp(e.target.value) }}
                                        onChange={setOtp}
                                            numInputs={6}
                                            inputStyle={inputStyles}
                                            focusStyle={focusStyles}
                                            shouldAutoFocus
                                     />
                                </div>
                    <div className='button-right my-3'>
                        <Button variant='primary' type='submit'>Verify Code</Button>
                    </div>
                </Form>
                </div>  
                {/* number otp verification end */}
      </div>
                        
    </Box>
    </Fade>
    </Modal>
            
</>
    );
};

export default PhoneOtpVerificationModel;