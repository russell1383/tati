import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import useAuth from "../../hooks/useAuth";
import CartProduct from "../CartProduct/CartProduct.component";
import {
  CartContentContainer,
  CartContentWrap,
  CartPageButton,
  EstimateShipping,
  ProductCartContainer,
} from "./CartContent.style";
import CartContentProduct from "./CartContentProduct";

const CartContent = () => {
  
  // const { user, products } = useContext(UserContext);
  const { user, products } = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  const [cartProducts, setCartProducts] = products;
  const history = useHistory();

  return (
    <>
      <CartContentWrap>
        <CartContentContainer>
          <h1>Cart</h1>
          <br />
          <p>You are eligible for free shipping!</p>

          <ProductCartContainer>
            <div className="product__table__title">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {cartProducts.length ? (
              cartProducts.map((product) => (
                <CartContentProduct key={product.id} product={product} />
              ))
            ) : (
              <>
                <br />
                <p>Empty Cart</p>
                <br />
                <br />
              </>
            )}

            <div className="product__subtotal__section">
              <section>
                <p>
                  Receive order notifications via WhatsApp:
                  <br /> WhatsApp Number: <input type="text" />
                </p>
              </section>

              <section>
                <label htmlFor="note">Add order note : </label>
                <br />
                <textarea name="" id="note" cols="30" rows="5"></textarea>
              </section>

              <section>
                <p>
                  Total: Bdt.{" "}
                  {cartProducts.reduce((a, b) => a + b.total_price, 0)}
                  <br />
                  Shipping & taxes calculated at checkout
                </p>
                <CartPageButton onClick={() => history.push("/checkout")}>
                  Checkout
                </CartPageButton>
              </section>
            </div>
          </ProductCartContainer>

          <EstimateShipping>
            <form>
              <fieldset>
                <legend>Estimate shipping</legend>
                <select>
                  <option value="0">United States</option>
                  <option value="1">India</option>
                  <option value="2">Pakistan</option>
                </select>
                <input type="text" />
                <input type="text" placeholder="Zip Code" />
                <CartPageButton type="submit">ESTIMATE</CartPageButton>
              </fieldset>
            </form>
          </EstimateShipping>
        </CartContentContainer>
      </CartContentWrap>
    </>
  );
};

export default CartContent;
