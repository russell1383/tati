import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/banner-images/banner-img1.png";
import img2 from "../assets/images/banner-images/banner-img2.jpg";

const AboutUsContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    width: 90vw;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin: 5% 0;
  }
  p {
    margin-top: 30px;
  }
  img {
    width: 60%;
    display: block;
    margin: 0 auto;
    padding-bottom: 5%;
  }
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <h1>About Us</h1>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <p>
          <strong> “Tati ar Tant”</strong> the name itself represents that we
          are working with traditional fabrics to make our products. We are
          mainly focusing on Tangail handmade clothing that brings you to the
          timeless culture of that fabric. Our moto is “An ethical trade with
          transparency”. We always try to maintain our transparency with our
          customers and ensure 100% authentic products thus our customers always
          count on us. Our aim is to display and make accessible our rich,
          ineffable, vivid and timeless repertoire of the Bangladeshi handloom
          and handicrafts from the hinterlands of Bangladesh. Our moto is to
          replenish ourselves with our own country based products which are
          comfortable and easy to carry as well as trendy. We are also focusing
          on regular wear comfortable sarees and kutis, kamizes for working
          women.
          <br />
          <br />
          The brand is founded by “Israt Jahan Tatia” who is immensely in love
          with the traditional handloom products and trying her best to work
          with our prescriptive and beautiful traditional tangail sarees and
          other Bangladeshi products with a modern and trendy way. In this way,
          she also wants to preserve our culture to our young generations. It’s
          undoubtedly a commendable initiative to represent the repertoire of
          our own country made products in our country as well as in other
          countries.
          <br />
          <br />
          Although she has no formal degree in fashion, her endless dedication,
          diligent work and imperturbable love and passion for Bangladeshi
          handloom and handcrafts which had led her to start this venture around
          5 years ago in 2016. She said that, we are a little brand working
          dedicatedly out of our home but we are feeling proud that we are being
          able to touch the lives of some small artisans and help them to
          maintain a healthy life by giving them some works.
          <br />
          <br />
          Our motive is to showcase traditional yet contemporary designs using
          natural dyed, handwoven fabrics. we have been working with root level
          small scale of artisans in our brand over last 2 years and also uplift
          the community that we work along with. It is helping our artisans to
          maintain a healthy life in one way and also bringing a change to our
          new generation’s fashion sense with our own country made things which
          were almost going to be annihilated.
          <br />
          <br />
          We connect and consult to our customer through our Facebook and
          Instagram family and we are always very happy to take and count our
          customer’s point of views and implement those where it is necessary.
          Moreover, we try to make something evocative designs that helps you to
          feel comfortable and confident.
          <br />
          <br />
          So, what are you thinking for? Stroll to our website and get your
          purchase done. It is sure that once you experience with our products,
          you want to experience with us more and more.
        </p>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
