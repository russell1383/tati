import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../ReviewCard/ReviewCard.component";
import {
  CustomerReviewContainer,
  ReviewStarsContainer,
  ArrowButtonContainer,
} from "./CustomerReview.style";
import { reviewData } from "./customerReviewData";

const CustomerReview = () => {
  const customeSlider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 2500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <>
      <CustomerReviewContainer>
        <p>Lets customer speak for us</p>
        <ReviewStarsContainer>
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStar} />
        </ReviewStarsContainer>
        <p>from 1789 reviews</p>
        <br />
        <br />
        <Slider {...settings} ref={customeSlider}>
          {reviewData.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
          {/* <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard /> */}
        </Slider>
        <ArrowButtonContainer>
          <FontAwesomeIcon icon={faChevronLeft} onClick={() => gotoPrev()} />
          <FontAwesomeIcon icon={faChevronRight} onClick={() => gotoNext()} />
        </ArrowButtonContainer>
      </CustomerReviewContainer>
    </>
  );
};

export default CustomerReview;
