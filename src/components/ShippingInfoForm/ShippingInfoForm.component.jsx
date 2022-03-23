import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import secondaryLogo from "../../assets/logos/logo-secondary.svg";
import primaryLogo from "../../assets/logos/logo-primary.svg";
import { CheckoutPageButton } from "../CheckoutContent/CheckoutContent.style";
import {
  InputWrap,
  ShippingAddress,
  ShippingInfoFormContainer,
} from "./ShippingInfoForm.style";
import { useTheme } from "styled-components";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { USER_ORDER } from "../../requests/services";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";
const ShippingInfoForm = () => {
  // const { user, products, order } = useContext(UserContext);
  const { user, products, order } = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  const [cartProducts, setCartProducts] = products;
  const [userOrder, setUserOrder] = order;
  const [orderedProducts, setOrderedProducts] = useState([]);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const theme = useTheme();

  useEffect(() => {
    if (cartProducts.length) {
      let products = cartProducts.map((product) => ({
        product_id: product.id,
        product_name: product.name,
        product_size: "M",
        product_price: product.price,
        product_quantity: product.total_quantity,
        product_color: product.color,
        total_price: product.total_price,
      }));
      setOrderedProducts(products);
    }
  }, []);

  const onSubmit = (data, e) => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (orderedProducts.length) {
      let orderData = {
        user_id: loggedInUser.id,
        totalQty: orderedProducts.length,
        ordered_products: orderedProducts,
        payment_mathod: data.payment_mathod,
        shipping_address: data.shipping_address,
        shipping_phone: data.shipping_phone,
        shipping_email: data.shipping_email,
        shipping_city: data.shipping_city,
        shipping_zip: data.shipping_zip,
        shipping_name: data.shipping_name,
        shipping_cost: 0,
        customer_email: data.shipping_email,
        customer_name: data.shipping_name,
        customer_phone: data.shipping_phone,
        customer_address: data.shipping_address,
        customer_city: data.shipping_city,
        customer_zip: data.shipping_zip,
        coupon_code: "",
        coupon_discount: 0,
        coupon_id: "",
        tax: 10,
        pay_amount: cartProducts.reduce((a, b) => a + b.total_price, 0),
        order_note: "lorem ipsum",
      };

      USER_ORDER(orderData, token)
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            orderData.invoice = response.data.invoice;
            setUserOrder(orderData);
            history.push("/order-placed");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  // console.log(cartProducts);

  return (
    <>
      <ShippingInfoFormContainer>
        <div className="shipping__wrapper">
          <img
            src={
              theme.colors.primary === "#231f20" ? secondaryLogo : primaryLogo
            }
            alt="tatiartant"
            onClick={() => history.push("/")}
          />
          <h6>
            Cart <FontAwesomeIcon icon={faAngleRight} /> Information
            <FontAwesomeIcon icon={faAngleRight} /> Shipping
            <FontAwesomeIcon icon={faAngleRight} /> Payment
          </h6>
        </div>

        <br />
        <ShippingAddress onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center fs-5">Shipping Address</h1>
          <br />
          <input
            type="text"
            placeholder="Name"
            defaultValue={loggedInUser.displayName}
            // defaultValue={loggedInUser.name}
            {...register("shipping_name")}
            required
          />
          <InputWrap>
            <input
              type="tel"
              placeholder="Phone"
              // defaultValue={loggedInUser.phone}
              {...register("shipping_phone")}
              required
              defaultValue={loggedInUser.phone}
              {...register("shipping_phone")}
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={loggedInUser.email}
              {...register("shipping_email")}
              required
            />
          </InputWrap>
          <input
            type="text"
            placeholder="Address"
            {...register("shipping_address")}
            required
          />
          <InputWrap>
            <input
              type="text"
              placeholder="City"
              {...register("shipping_city")}
              required
            />

            <input
              type="text"
              placeholder="Postal code"
              {...register("shipping_zip")}
              required
            />
          </InputWrap>
          <select {...register("payment_mathod")} required>
            <option value="">--- Select Payment Method ---</option>
            <option value="Cash on delivery">Cash on delivery</option>
            <option value="Payment">Payment</option>
          </select>
          <CheckoutPageButton type="submit">
            <span onClick={() => history.push("/")}> Continue to Shipping</span>
          </CheckoutPageButton>{" "}
          <CheckoutPageButton type="submit">
             <span onClick={() => history.push("/cart")}>Return to cart</span>
          </CheckoutPageButton>
          {/* <div>
              <Button variant="secondary">
                <span onClick={() => history.push("/")}> Continue to shipping</span>
              </Button>{" "}
   
             <Button className="ms-2" variant="primary">
                <span onClick={() => history.push("/cart")}>Return to cart</span>
             </Button>

          </div> */}
        
            
    
          
         
        </ShippingAddress>
        <br />
        <hr />
        <br />
        <small>Refund policy Privacy policy Terms of service</small>
      </ShippingInfoFormContainer>
    </>
  );
};

export default ShippingInfoForm;
