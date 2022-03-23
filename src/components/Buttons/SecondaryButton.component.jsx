import React from "react";
import { SecondaryButtonContainer } from "./Buttons.style";

const SecondaryButton = ({ children }) => {
  return (
    <SecondaryButtonContainer>
      <div>
        <span> {children}</span>
      </div>
    </SecondaryButtonContainer>
  );
};

export default SecondaryButton;
