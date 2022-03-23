import React from "react";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 768px) {
    width: 95vw;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin: 5% 0;
  }
`;

const ContactUs = () => {
  return (
    <>
      <ContactUsContainer>
        <h1>Contact Us</h1>
        <p>
          Hello to all of our fellow traditional saree lovers! <br />
          <br />
          Here we are to help you about any of your queries related to our
          products, prices and qualities. You can buy with a succinct guide and
          assistance by our friendly stuffs and we are available in here every
          day from 11 a.m. to 8 p.m.
          <br />
          <br />
          Feel free to email us to the given address below and do not hesitate
          to call, text and even WhatsApp us for any further queries. We will be
          happy to help and will try our best to solve all of your queries as
          fast as we can. Our number is also given below. <br />
          <br />
          <>Email:</> <strong>&nbsp;&nbsp;tatiartant@gmail.com </strong>
          <br />
          <br />
          <>Mobile/WhatsApp:</> <strong>&nbsp;&nbsp;+8801737900666 </strong>
          <br />
          <br />
          <u>Caution:</u>&nbsp;&nbsp; Always be aware of fraud websites which
          are using the same name of ours. Try to focus on our URL (Uniform
          Resource Locator) while searching and our URL is www.tatiartant.com .
          The name of our brand is Tati Ar Tant (তাঁতি আর তাঁত) which spelled
          exactly in this manner. It is requested to be very mindful of other
          pages who are trying to fake our brands and replicate our products
          with low category materials. We always try to ensure our product
          values by using high quality fabrics to make our sarees and other
          dresses unique and comfortable. We never replicate clothes and always
          try to keep our prices minimal and on budget comparing to our
          qualities for our loving customers. If you experience buoying once
          from us, you will be in love with our products. If you get some fake
          pages and replica products which are using our name, then you are
          cordially requested to directly file a police complaint or report it
          as a cybercrime.
          <br />
          <br />
          <u>Our Facebook page link: </u>
          <strong>&nbsp;&nbsp;www.facebook.com/tatiartant</strong>
          <br />
          <br />
          <u>Instagram: </u>
          <strong>www.instagram.com/tati_ar_tant</strong>
          <br />
          <br />
          <strong>
            <u>Showroom Address:</u>
          </strong>{" "}
          <br />
          <br />
          Tati Ar Tant
          <br />
          <br />
          Shop No: 62 and 71
          <br />
          <br />
          Town Hall, Asad gate, Mohammadpur, Dhaka <br />
          <br />
          Happy Handloom Shopping!
        </p>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
