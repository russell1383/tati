import React from "react";
import { TertiaryButtonContainer } from "./Buttons.style";

const TertiaryButton = ({ children }) => {
  return (
    <TertiaryButtonContainer>
      <div>
        <span> {children}</span>
      </div>
    </TertiaryButtonContainer>
  );
};

export default TertiaryButton;
