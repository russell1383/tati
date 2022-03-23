import React, { useContext } from "react";
// import { UserContext } from "../../App";
import { UserContext } from "../../App";
import {
  CartProductsSection,
  CheckoutContentContainer,
  CheckoutPageButton,
  CuponCodeSection,
  PriceCalcSection,
} from "./CheckoutContent.style";
import ShippingInfoForm from "../ShippingInfoForm/ShippingInfoForm.component";
import { IMG_BASE_URL } from "../../requests/api";
import useAuth from "../../hooks/useAuth";
const CheckoutContent = () => {
  // const { products } = useContext(UserContext);
  const { products,user } = useAuth();
  const [cartProducts, setCartProducts] = products;
  console.log(cartProducts);
  return (
    <>
      <CheckoutContentContainer>
        <ShippingInfoForm />
        <CartProductsSection>
          {cartProducts.length
            ? cartProducts.map((product) => (
                <div className="cart_product" key={product.id}>
                  <img
                    src={`${IMG_BASE_URL}/products/${product.photo}`}
                    alt=""
                  />
                  <p>
                    {product.name}
                    {/* <br /> {product.size} <br /> {product.color}{" "} */}
                  </p>
                  <p>৳ {product.total_price}.00</p>
                </div>
              ))
            : null}

          <CuponCodeSection>
            <input type="text" placeholder="Gift card or discount code" />
            <CheckoutPageButton>Apply</CheckoutPageButton>
          </CuponCodeSection>

          <PriceCalcSection>
            <small>Subtotal</small>
            <p>৳ {cartProducts.reduce((a, b) => a + b.total_price, 0)}.00</p>
          </PriceCalcSection>

          <PriceCalcSection>
            <small>Shipping</small>
            <p>৳ 00.00</p>
          </PriceCalcSection>
          <br />
          <hr />
          <br />
          <PriceCalcSection>
            <small>Total</small>
            <h2>৳ {cartProducts.reduce((a, b) => a + b.total_price, 0)}.00</h2>
          </PriceCalcSection>
        </CartProductsSection>
      </CheckoutContentContainer>
    </>
  );
};

export default CheckoutContent;
