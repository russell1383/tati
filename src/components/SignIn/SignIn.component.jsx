import React, { useState } from "react";
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
import { FacebookLoginButton,GoogleLoginButton ,TelegramLoginButton} from "react-social-login-buttons";

const SignInContent = () => {
  // const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const location = useLocation();
  const url= location.state?.from || "/"
  const { user,signInWithGoogle ,products,setIsLoading, signInWithFacebook} = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  const [error, setError] = useState(null);
  const [showForgetPass, setShowForgetPass] = useState(false);
  
  // const onSubmit = (data, e) => {
  //   console.log(data);
  //   if (data.phone.length >= 11 && data.password.length >= 4) {
  //     SIGNIN_CALL(data)
  //       .then((response) => {
  //         if (response.data) {
  //           console.log(response);
  //           setError(null);
  //           localStorage["token"] = JSON.stringify(response.data.access_token);
  //           console.log(response);
  //           GET_USER_INFO_CALL(response.data.access_token)
  //             .then((response) => {
  //               if (response.data) {
  //                 setError(null);
  //                 setLoggedInUser(response.data);
  //                 console.log(response);
  //                 history.replace(from);
  //                 showNotification("Logged in Successfully!");
  //               }
  //             })
  //             .catch((err) => {
  //               setError("Something went wrong! Please try again later.");
  //             });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         setError("Credentials not found! Please register.");
  //       });
  //   } else {
  //     if (data.phone.length < 11) {
  //       setError("Phone number must be 11 numbers!");
  //     } else if (data.password.length <= 4) {
  //       setError("Password must be 4 charecters or more!");
  //     }
  //   }
  // };

  const handleForgotPassword = () => {
    setShowForgetPass(true);
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true)
    signInWithGoogle()
      .then((res) => 
        {
          setLoggedInUser(res.user)
          history.push(url)
        }
          )
      .catch((err) => console.log(err))
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
             history.push(url)
            })
      .catch((error) => {
            setError(error.message);
      })
            
    .finally(() => {
        setIsLoading(false)
      })
  }


  return (
    <>
       <SignInContainer>
        <SignInFormContainer>
          {!showForgetPass && (
            <>
              
              {/* start login button  */}
      <div className="px-4 py-4 shadow-lg p-3 mb-5 bg-body rounded mt-3" >
                <h2 className="mb-2 text-center text-black fw-900">Login</h2>
                 <hr />
                <div className="d-grid mt-3">      
                     <div className="">
                           <GoogleLoginButton className="mb-3" onClick={handleGoogleSignIn} />
                            <FacebookLoginButton className="mb-3" onClick={handleFaceBookSignIn} />
                    <TelegramLoginButton onClick={handleOpen}>
                      <span>Log in with Phone</span>
                    </TelegramLoginButton>
                      </div>        
                  </div>
      </div>
      <div className="text-center mb-3">
         <p className="text-black">
          New to TatiarTant?
          <span className="text-primary"
          onClick={() => history.push("/sign-up")}>
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
        // handleBookingClose={handleBookingClose}
      >
      </PhoneOtpVerificationModel>
     
     
    </>
  
  );
};

export default SignInContent;
