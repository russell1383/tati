import React from "react";
import { CartContentProductContainer } from "./CartContent.style";
import modelImg from "../../assets/images/model-images/model-1.jpg";
import QuantitySelectorBox from "../QuantitySelectorBox/QuantitySelectorBox.component";
import { IMG_BASE_URL } from "../../requests/api";

const CartContentProduct = ({ product }) => {
  return (
    <>
      <CartContentProductContainer>
        <section>
          <img src={`${IMG_BASE_URL}/products/${product.photo}`} alt="" />
          <p>
            {product.name} <br />
            Tk. {product.price}
          </p>
        </section>

        <QuantitySelectorBox porductInfo={product} />
        <p>৳ {product.total_price}</p>
      </CartContentProductContainer>
    </>
  );
};

export default CartContentProduct;
