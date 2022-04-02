import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewStarsContainer } from "../CustomerReview/CustomerReview.style";
import { ReviewCardContainer } from "./ReviewCard.style";
import pdImg from "../../assets/images/model-img-1.png";
// import { Card } from "react-bootstrap";
import{ Avatar, Card,CardActions,CardContent,CardHeader, CardMedia, Rating, Typography }from '@mui/material';
import { styled } from '@mui/material/styles';
const ReviewCard = ({ review }) => {
  return (
    <>
      <ReviewCardContainer>

        {/* <ReviewStarsContainer>
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStar} />
        </ReviewStarsContainer> */}
        {/* <h4 className="">{review.title}</h4>
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
        <p>{review.pdName}</p> */}

        {/* customer review start here  */}
        <Card sx={{boxShadow: 0,border: 1, borderColor: 'primary.main' }}>
          <CardHeader 
        avatar={
          <Avatar sx={{bgcolor:'black'}} aria-label="recipe">
            {review.pdName.substring(0, 2)}
          </Avatar>
        }

        title={review.title}
        subheader= {review.date}
          />
      <CardMedia
        component="img"
            height="270"
            width="180"
            sx={{ borderRadius: 1 }}
        image={review.img}
        alt="Paella dish"
          />
          <CardContent>
            <Typography sx={{ textAlign: 'start'}} variant="body2" gutterBottom color="text.secondary">
             {review.review.substring(0, 65)}
            </Typography>

            <Typography sx={{ textTransform: 'uppercase',textAlign:'start' }}  color="text.secondary">
            {review.pdName}
            </Typography>
            <CardActions>
               <Typography sx={{textAlign:'start'}}>
                        <Rating
                            readOnly
                            // defaultValue={star}
                            defaultValue={review.star}
                            precision={0.5}
                            fontSize="inherit"
                 
                        />
            </Typography>

            </CardActions>
           
          </CardContent>
        </Card>

        {/* customer review end here */}
      </ReviewCardContainer>
    </>
  );
};

export default ReviewCard;
