import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
// import { useForm } from "react-hook-form";
import { useHistory, useLocation ,Redirect} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GET_USER_INFO_CALL, SIGNIN_CALL } from "../../requests/services";
import { showNotification } from "../../utils/notifications";
import ForgotPassword from "./ForgotPassword";
import { SignInContainer, SignInFormContainer } from "./SignIn.style";
import { Link } from "react-router-dom";
import PhoneOtpVerificationModel from "./PhoneOtpVerificationModel";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LoginModal from "./LoginModal";
import { FacebookLoginButton,GoogleLoginButton ,TelegramLoginButton} from "react-social-login-buttons";


const style = {
  position: 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:450,
  // bgcolor: 'rgba(255 , 255 255 0.6)',
  // bgcolor: 'transparent',
  bgcolor: 'text.disabled',
     border: '0px solid blue',
    //  bgcolor: 'transparent',
  //  backgroundColor: '#000000',
   opacity: 0.5,
   filter:'blur',
   boxShadow: 30,
  p: 3,
};

const SignInComponentsModel = ({ openBooking, handleBookingClose }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const location = useLocation();
  const url= location.state?.from || "/"
  const { user,signInWithGoogle ,setIsLoading, signInWithFacebook,error, setError} = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  // const [error, setError] = useState(null);
  const [showForgetPass, setShowForgetPass] = useState(false);
   const handleForgotPassword = () => {
    setShowForgetPass(true);
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true)
    signInWithGoogle()
      .then((res) => {
        setLoggedInUser(res.user)
        history.push(url)
        handleBookingClose();
      }
       
      )
      .catch((error) => {
        setError(error.message);
  })
      .finally(() => {
        setIsLoading(false)
      })

  }
  const handleFaceBookSignIn = () => {
          signInWithFacebook()
          // setIsLoading(true)
    .then((result) => {
            const user = result.user;
            setLoggedInUser(user)
            setError('');
            history.push(url)
            handleBookingClose();
            })
      .catch((error) => {
            setError(error.message);
      })
            
    .finally(() => {
        setIsLoading(false)
      })
  }



    return (
    <div>
      <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout:500}}
        >
        <Fade in={openBooking}>
        <Box sx={style}  overlayStyle={{backgroundColor: 'transparent'}}>
        <SignInContainer>
        <SignInFormContainer>
          {!showForgetPass && (
            <>
              {/* <h1 className="">Login</h1> */}
              {/* <br />
              <p>Please enter your email and password:</p> */}
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              {/* <form >
                <div className="input__wrap">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    required
                  />
                </div>

                <div className="input__wrap">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    required
                  />
                  <span onClick={() => handleForgotPassword()}>
                    Forget password ?
                  </span>
                </div>
                <small>{error ? error : null}</small>
                <button type="submit">
                  <PrimaryButton>Login</PrimaryButton>
                </button>
              </form> */}
              {/* <p>
                Don't have an account ?
                <span onClick={() => history.push("/sign-up")}>
                  {" "}
                  Create one
                </span>
              </p> */}
             
              {/* start login button  */}
      <div className="p-2 ">
        <h2 className="mb-3 text-center text-white fw-900">Login</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
                        <Form >
                          
      
                        </Form>
        <hr />
          {/* <div className="d-grid gap-2 mt-3">       
          <Button        
            onClick={handleGoogleSignIn} variant="primary"  type="Submit">
             <span className="me-4"><GoogleIcon  sx={{ fontSize: 30 }}/></span> 
            <span className="start">Sign in with google</span> 
            </Button>
          </div> */}
            {/* <div className="d-grid gap-2 mt-3">
            <Button onClick={handleFaceBookSignIn} variant="success"  type="Submit">
             <span className="me-3">< FacebookIcon sx={{ fontSize: 30 }}/></span> Sign in with facebook
            </Button>
            </div> */}
               
            {/* <div className="d-grid gap-2 mt-3">
            <Button onClick={handleOpen} variant="success" type="Submit">
             <span className="me-4"><PhoneAndroidIcon  sx={{ fontSize: 30 }}/></span> Sign in with phone
            </Button>
          </div> */}
                        {/* login button start */}

                        <div className="d-grid gap-2 mt-3">      
                     <div className="">
                           <GoogleLoginButton className="mb-3" onClick={handleGoogleSignIn} />
                            <FacebookLoginButton className="mb-3" onClick={handleFaceBookSignIn} />
                            <TelegramLoginButton onClick={handleOpen}>
                               <span>Log in with Phone</span>
                            </TelegramLoginButton>
                      </div>        
                  </div>
                        {/* login button end  */}
        </div>
    <div className="p-1 mt-2 text-center ">
         <p className="text-primary ">
          New to TatiarTant?
          <span className="text-success"
          onClick={() => history.push("/sign-up") & handleBookingClose()}>
          Create account</span>
        </p>
      </div>
              
            </>
          )}

          {showForgetPass && (
            <ForgotPassword setShowForgetPass={setShowForgetPass} />
          )}
        </SignInFormContainer>
      </SignInContainer>
      <PhoneOtpVerificationModel
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        handleBookingClose={ handleBookingClose}
      >
      </PhoneOtpVerificationModel>
              {/* <LoginModal
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
              >
           </LoginModal> */}
            
        </Box>
        </Fade>
      </Modal>
    </div>
    );
};

export default SignInComponentsModel;