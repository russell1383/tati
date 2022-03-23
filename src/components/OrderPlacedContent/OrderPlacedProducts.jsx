import React from "react";
import { OrderPlacedProductContainer } from "./OrderPlacedContent.style";

function OrderPlacedProducts({ product }) {
  return (
    <>
      {product && (
        <OrderPlacedProductContainer>
          {/* <img src={`${IMG_BASE_URL}/products/${product.photo}`} alt="" /> */}
          <div>
            <p>
              <strong>{product.product_name}</strong>{" "}
            </p>

            <small>
              <strong>Size :</strong> {product.product_size}
            </small>

            <small>
              <strong>Colour :</strong> {product.product_size}
            </small>

            <small>
              <strong>Qty :</strong> {product.product_quantity}
            </small>

            <h6>৳ {product.total_price}.00</h6>
          </div>
        </OrderPlacedProductContainer>
      )}
    </>
  );
}

export default OrderPlacedProducts;
