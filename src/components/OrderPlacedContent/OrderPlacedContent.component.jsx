import {
  faCheckCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import useAuth from "../../hooks/useAuth";
import { IMG_BASE_URL } from "../../requests/api";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import NotFound from "../NotFound/NotFound.component";
import { OrderPlacedContainer } from "./OrderPlacedContent.style";
import OrderPlacedProducts from "./OrderPlacedProducts";

function OrderPlacedContent() {
  // const { user, products, order } = useContext(UserContext);
  const { user, products, order } = useAuth();
  const [cartProducts, setCartProducts] = products;
  const [userOrder, setUserOrder] = order;
  const history = useHistory();
  let {
    invoice,
    shipping_name,
    shipping_phone,
    customer_email,
    shipping_address,
    shipping_city,
    shipping_zip,
    payment_mathod,
    ordered_products,
  } = userOrder;
  console.log(userOrder);
  return (
    <>
      {Object.keys(userOrder).length ? (
        <OrderPlacedContainer>
          <header>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check__circle"
              size="4x"
            />{" "}
            <br />
            <h2>We've received your order</h2>
            <span>
              <strong>Order No : </strong>
              {invoice}
            </span>
            <br />
            <small>
              A copy of your receipt has been sent to {customer_email}.
            </small>
          </header>
          <br />
          <hr />
          <br />
          <main>
            <div>
              <h5>Shipping Information</h5>
              <p>
                <strong>Name : </strong> {shipping_name}
              </p>
              <p>
                <strong>Phone : </strong> {shipping_phone}
              </p>
              <p>
                <strong>Email : </strong> {customer_email}
              </p>
            </div>

            <div>
              <h5>Your Information</h5>
              <p>
                <strong>Address : </strong> {shipping_address}
              </p>
              <p>
                <strong>City : </strong> {shipping_city}
              </p>
              <p>
                <strong>Postal Code : </strong> {shipping_zip}
              </p>
            </div>

            <div>
              <h5>Payment Method: </h5>
              <p>{payment_mathod}</p>
            </div>
          </main>
          <br />
          <br />
          <section>
            <h5>Order Summery : </h5>
            {ordered_products &&
              ordered_products.map((product, idx) => (
                <OrderPlacedProducts key={idx} product={product} />
              ))}

            <OrderPlacedProducts />
            <hr />
            <br />
            <section>
              <p>Sub Total : </p>{" "}
              <h6>
                ৳ {cartProducts.reduce((a, b) => a + b.total_price, 0)}.00
              </h6>
            </section>
            <section>
              <p>Delivery Charge: </p> <h6>৳ 0.00</h6>
            </section>
            <section>
              <p>Total: </p>{" "}
              <h6>
                ৳ {cartProducts.reduce((a, b) => a + b.total_price, 0)}.00
              </h6>
            </section>
          </section>
          <br />
          <br />
          <span
            onClick={() => {
              setCartProducts([]);
              history.push("/");
            }}
          >
            <PrimaryButton>
              <FontAwesomeIcon icon={faChevronLeft} /> &nbsp; Back Home
            </PrimaryButton>
          </span>
        </OrderPlacedContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default OrderPlacedContent;
