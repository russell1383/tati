import React, { useContext, useState } from "react";
// import { UserContext } from "../../App";
import useAuth from "../../hooks/useAuth";
import {
  findProductOnCart,
  handleQuantity,
  handleRemoveItemFromCart,
} from "../../utils/cartManagement";
import {
  QuantitySelectorBoxContainer,
  QuantitySelectorWrap,
} from "./QuantitySelectorBox.style";

const QuantitySelectorBox = ({ porductInfo }) => {
  // const { user, products } = useContext(UserContext);
  const { user, products } = useAuth();
  const [cartProducts, setCartProducts] = products;

  const increment = "increment";
  const decrement = "decrement";

  return (
    <>
      <QuantitySelectorWrap>
        <QuantitySelectorBoxContainer>
          <button
            onClick={() => {
              porductInfo &&
                handleQuantity(
                  cartProducts,
                  setCartProducts,
                  porductInfo,
                  decrement
                );
            }}
          >
            -
          </button>
          <span>
            {findProductOnCart(cartProducts, porductInfo.id).exist
              ? findProductOnCart(cartProducts, porductInfo.id).total_quantity
              : 1}
          </span>
          <button
            onClick={() => {
              porductInfo &&
                handleQuantity(
                  cartProducts,
                  setCartProducts,
                  porductInfo,
                  increment
                );
            }}
          >
            +
          </button>
        </QuantitySelectorBoxContainer>
        <u
          onClick={() => {
            porductInfo &&
              handleRemoveItemFromCart(
                cartProducts,
                setCartProducts,
                porductInfo.id
              );
          }}
        >
          Remove
        </u>
      </QuantitySelectorWrap>
    </>
  );
};

export default QuantitySelectorBox;
