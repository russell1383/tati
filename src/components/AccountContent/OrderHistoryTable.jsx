import React from "react";
import { OrderHistoryTableWrap } from "./AccountContent.style";

function OrderHistoryTable({ orderedHistory }) {
  console.log(orderedHistory);
  return (
    <>
      <OrderHistoryTableWrap>
        <table>
          <tbody>
            <tr>
              <th>No.</th>
              <th>TxID</th>
              <th>Ordered Products</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
            {orderedHistory.map((product, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{product.order_number}</td>
                <td>
                  {product.ordered_products
                    .map((pd, idx) => pd.product_name)
                    .join(" , ")}
                </td>
                <td>{product.ordered_products.length}</td>
                <td>{product.pay_amount}</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </OrderHistoryTableWrap>
    </>
  );
}

export default OrderHistoryTable;
