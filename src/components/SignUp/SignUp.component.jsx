import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "../SignIn/SignIn.style";
import { SIGNUP_CALL } from "../../requests/services";
import { useState } from "react";
import SignUpOtp from "./SignUpOtp.component";
import SignInComponentsModel from "../SignIn/SignInComponentsModel";
const SignUpContent = () => {
  const { register, handleSubmit } = useForm();
  const [openOtp, setOpenOtp] = useState(false);
  const [userNum, setUserNum] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  // login model 
  const [openBooking, setBookingOpen] = React.useState(false);
   const handleBookingOpen = () => setBookingOpen(true);
   const handleBookingClose = () => setBookingOpen(false);
  const onSubmit = (data, e) => {
    setError(null);
    let passwordValid = data.password === data.password_confirmation;
    let passwordLength =
      data.password.length && data.password_confirmation.length >= 4;
    if (data.phone.length >= 11 && passwordValid && passwordLength) {
      setUserNum(data.phone);

      SIGNUP_CALL(data).then((response) => {
        if (response.data.errors) {
          if (response.data.errors.phone) {
            setError(response.data.errors.phone[0]);
          } else if (response.data.errors.password) {
            setError(response.data.errors.password[0]);
          }
        } else {
          setError(null);
          console.log("success");
          e.target.reset();
          setOpenOtp(true);
        }
      });
    } else {
      if (data.phone.length < 11) {
        setError("Phone number must be 11 numbers!");
      } else if (!passwordValid) {
        setError("Password not matched! Please try again.");
      } else if (!passwordLength) {
        setError("Password must be 4 charecters or more!");
      }
    }
  };

  return (
    <>
      <SignInContainer>
        <div>
        {!openOtp ? (
          <SignInFormContainer>
            
            <h1 className="mt-4">Register</h1>
            <p>Please fill in the information below:</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input__wrap">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name")} required />
              </div>

              <div className="input__wrap">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" {...register("phone")} required />
              </div>

              {/* <div className="input__wrap">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div> */}

              <div className="input__wrap">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  {...register("password")}
                />
              </div>

              <div className="input__wrap">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  required
                  {...register("password_confirmation")}
                />
              </div>
              <br />
              {error ? <small>{error}</small> : null}

              <button type="submit">
                <PrimaryButton>Register</PrimaryButton>
              </button>
            </form>
            <p>
              Already have an account ?

              <span onClick={handleBookingOpen}> Login</span>
              {/* <span onClick={() => history.push("/sign-in")}> Login</span> */}
            </p>
          </SignInFormContainer>
        ) : (
            
          // <SignUpOtp userNum={userNum} />
            <h1>Hello</h1>
        )}
        </div>
      </SignInContainer>
       <SignInComponentsModel
       openBooking={openBooking}
       handleBookingClose={handleBookingClose}
      >
      </SignInComponentsModel>
    </>
  );
};

export default SignUpContent;
