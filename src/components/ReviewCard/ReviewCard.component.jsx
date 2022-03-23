import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewStarsContainer } from "../CustomerReview/CustomerReview.style";
import { ReviewCardContainer } from "./ReviewCard.style";
import pdImg from "../../assets/images/model-img-1.png";

const ReviewCard = ({ review }) => {
  return (
    <>
      <ReviewCardContainer>
        <ReviewStarsContainer>
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStar} />
        </ReviewStarsContainer>
        <h4>{review.title}</h4>
        <h5>{review.review.substring(0, 65)}...</h5>
        <br />
        <small>
          {review.name}
          <br />
          {review.date}
        </small>
        <br />
        <img src={review.img} alt="" />
        <br />
        <p>{review.pdName}</p>
      </ReviewCardContainer>
    </>
  );
};

export default ReviewCard;
