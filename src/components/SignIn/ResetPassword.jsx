import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Buttons/PrimaryButton.component";

function ResetPassword({ userNum }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const handleResetPassword = (data, e) => {
    setError(null);
    const newData = { ...data, phone: userNum };
    let passwordValid = data.password === data.password_confirmation;
    let passwordLength =
      data.password.length && data.password_confirmation.length >= 4;
    if (newData.phone.length >= 11 && passwordValid && passwordLength) {
      console.log(newData);
    } else {
      if (newData.phone.length < 11) {
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
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <div className="input__wrap">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            required
            {...register("password")}
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="confirm_password">Confirm New Password</label>
          <input
            type="password"
            id="confirm_password"
            required
            {...register("password_confirmation")}
          />{" "}
        </div>
        {error ? <small>{error}</small> : null}
        <br />
        <button type="submit">
          <PrimaryButton>Rest password</PrimaryButton>
        </button>
      </form>
    </>
  );
}

export default ResetPassword;
