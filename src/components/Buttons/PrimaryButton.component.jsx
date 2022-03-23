import React from "react";
import { PrimaryButtonContainer } from "./Buttons.style";

const PrimaryButton = ({ children }) => {
  return (
    <PrimaryButtonContainer>
      <div>
        <span> {children}</span>
      </div>
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
