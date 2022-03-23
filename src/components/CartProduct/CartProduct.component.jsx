import React from "react";
import { CartProductContainer } from "./CartProduct.style";
import img from "../../assets/images/model-img-1.png";
import QuantitySelectorBox from "../QuantitySelectorBox/QuantitySelectorBox.component";
import { IMG_BASE_URL } from "../../requests/api";

const CartProduct = ({ product }) => {
  return (
    <>
      <CartProductContainer>
        <div className="left">
          <img src={`${IMG_BASE_URL}/products/${product.photo}`} alt="" />
        </div>
        <div className="right">
          <h6>{product.name} </h6>
          {/* <h6>M</h6> */}
          <h6>Bdt. {product.total_price}</h6>
          <QuantitySelectorBox porductInfo={product} />
        </div>
      </CartProductContainer>
    </>
  );
};

export default CartProduct;
