import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FORGOT_PASS_OTP_REQ } from "../../requests/services";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import ResetPassword from "./ResetPassword";
import { OtpForm } from "./SignIn.style";

function ForgotPassword({ setShowForgetPass }) {
  const { register, handleSubmit } = useForm();
  const [otpReq, setOtpReq] = useState(true);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [userNum, setUserNum] = useState(null);
  const [openResetPass, setOpenResetPass] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtpReqRes = (data, e) => {
    setError(null);
    if (otpReq) {
      if (data.phone >= 11) {
        FORGOT_PASS_OTP_REQ({ phone: data.phone }).then((res) => {
          console.log(res);
          // setUserNum(data.phone);
          // setOtpReq(false);
        });
      } else {
        setError("Please enter a valid number.");
      }
    } else {
      const currentOtp = { otp: otp.join(""), phone: userNum };
      console.log(currentOtp);
      setOpenResetPass(true);
    }
  };

  return (
    <>
      <h1>Forget Password</h1>
      <br />
      {!openResetPass && otpReq ? (
        <>
          {" "}
          <p>Please enter your phone:</p>
          <form onSubmit={handleSubmit(handleOtpReqRes)}>
            <div className="input__wrap">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" {...register("phone")} required />
            </div>
            {error ? <small>{error}</small> : null}
            <br />
            <button type="submit">
              <PrimaryButton>Submit</PrimaryButton>
            </button>
          </form>
          <p>
            Want to login ?
            <span onClick={() => setShowForgetPass(false)}> Login</span>
          </p>
        </>
      ) : !openResetPass && !otpReq ? (
        <>
          <p>Please enter your otp:</p>
          <OtpForm onSubmit={handleSubmit(handleOtpReqRes)}>
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
            {/* {error && <small>OTP did not matched! Try again.</small>} */}
            <button type="submit">
              <PrimaryButton>Submit Otp</PrimaryButton>
            </button>
          </OtpForm>
        </>
      ) : (
        <ResetPassword userNum={userNum} />
      )}
    </>
  );
}

export default ForgotPassword;
