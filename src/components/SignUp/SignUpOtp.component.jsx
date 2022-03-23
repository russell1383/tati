import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
// import { UserContext } from "../../App";
import useAuth from "../../hooks/useAuth";
import {
  SIGNUP_OTP_CALL,
  SIGNUP_RESEND_OTP_CALL,
} from "../../requests/services";
import { showNotification } from "../../utils/notifications";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { OtpForm, SignInFormContainer } from "../SignIn/SignIn.style";
import SignInComponentsModel from "../SignIn/SignInComponentsModel";

function SignUpOtp({ userNum }) {
  const { register, handleSubmit } = useForm();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    // const { user, products } = useContext(UserContext);
  const { user, products,error } = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtp = (e) => {
    const currentOtp = { otp: otp.join(""), phone: userNum };
    SIGNUP_OTP_CALL(currentOtp).then((response) => {
      console.log(response);
      if (response.data.errors) {
        console.log(response.data);
      } else {
        setLoggedInUser(response.data.user);
        localStorage["token"] = JSON.stringify(response.data.token);
        setOtp([...otp.map((v) => "")]);
        showNotification("Registered Successfully!");
        history.replace(from);
      }
    });
  };

  const handleResendOtp = (e) => {
    if (userNum) {
      const phone = { phone: userNum };
      SIGNUP_RESEND_OTP_CALL(phone).then((response) => {
        console.log(response);
        if (response.data.errors) {
          console.log(response);
        } else {
          setOtp([...otp.map((v) => "")]);
          console.log("success");
        }
      });
    }
  };

  return (
    <>
      <SignInFormContainer>
        <h1>Register</h1>
        <br />
        <p>Please fill in the Otp:</p>
        <br />
        <OtpForm onSubmit={handleSubmit(handleOtp)}>
          <section>
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </section>
          <br />
          <p onClick={handleResendOtp}>Resend OTP</p>
          <br />
          {error && <small>OTP did not matched! Try again.</small>}
          <button type="submit">
            <PrimaryButton>Submit Otp</PrimaryButton>
          </button>
        </OtpForm>
      </SignInFormContainer>
     
    </>
  );
}

export default SignUpOtp;
