import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { LOGOUT_CALL, USER_ORDER_HISTORY_CALL } from "../../requests/services";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { AccountContainer } from "./AccountContent.style";
import OrderHistoryTable from "./OrderHistoryTable";

function AccountContent() {
  // const { user, products } = useContext(UserContext);
  const { user, products , logOut} = useAuth();
  const [loggedInUser, setLoggedInUser] = user;
  const [orderedHistory, setOrderedHistory] = useState([]);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      USER_ORDER_HISTORY_CALL(token)
        .then((res) => {
          setOrderedHistory(res.data[0]);
        })
        .catch((error) => console.log(error));
    }
    return () => {};
  }, [loggedInUser]);

  // const handleLogoutClick = () => {
  //   console.log("clicked");
  //   let token = JSON.parse(localStorage.getItem("token"));
  //   if (token) {
  //     LOGOUT_CALL(token)
  //       .then((res) => {
  //         console.log(res.data.message);
  //         setLoggedInUser({});
  //         localStorage.removeItem("token");
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  return (
    <>
      <AccountContainer>
        <br />
        <br />
        <h1>My Account</h1>
        <p>User Name : 
          {loggedInUser.displayName} !</p>
        <p>User Email : 
          {loggedInUser.email} !</p>
        {/* <p>User Phone: 
          {loggedInUser.phone} !</p> */}
        <p>User Phone: 
          {loggedInUser.user} !</p>
        <br />
        <div>
          <section>
            <small>My orders</small>
            <hr />
            <br />
            {orderedHistory.length ? (
              <OrderHistoryTable orderedHistory={orderedHistory} />
            ) : (
              <p>You haven't got any previous yet!</p>
            )}
          </section>
          <aside>
            {/* <small>Primary Address</small> */}
            <hr />
            <br />
            <div>
              <PrimaryButton>Edit Address</PrimaryButton>
            </div>
          </aside>
        </div>
      </AccountContainer>
    </>
  );
}

export default AccountContent;
