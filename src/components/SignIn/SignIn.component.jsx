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
      <div className="p-3 box">
        <h2 className="mb-3 text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form >
        </Form>
        <hr />
        <div className="d-grid gap-2 mt-3">       
          <Button        
            onClick={handleGoogleSignIn} variant="primary"  type="Submit">
             <span className="me-4"><GoogleIcon  sx={{ fontSize: 30 }}/></span> 
            <span className="start">Sign in with google</span> 
            </Button>
          </div>
            <div className="d-grid gap-2 mt-3">
            <Button onClick={handleFaceBookSignIn} variant="success"  type="Submit">
             <span className="me-3">< FacebookIcon sx={{ fontSize: 30 }}/></span> Sign in with facebook
            </Button>
          </div>
               
            <div className="d-grid gap-2 mt-3">
            <Button onClick={handleOpen} variant="success" type="Submit">
             <span className="me-4"><PhoneAndroidIcon  sx={{ fontSize: 30 }}/></span> Sign in with phone
            </Button>
            </div>
      </div>
      <div className="p-3 box mt-3 text-center">
       <p>
               New to TatiarTant?
          <span onClick={() => history.push("/sign-up")}>
                  {" "}
                 Create an account
                </span>
              </p>
      </div>
              {/* End login button */}
              
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
      >
      </PhoneOtpVerificationModel>
    </>
  
  );
};

export default SignInContent;
