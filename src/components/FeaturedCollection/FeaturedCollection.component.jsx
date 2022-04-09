import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../constants/container";
import {
  FeaturedCollectionCardContainer,
  FeaturedCollectionContainer,
} from "./FeaturedCollection.style";
import ProductCard from "../ProductCard/ProductCard.component";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { useHistory } from "react-router";
import { GET_FEATURED_PRODUCTS } from "../../requests/services";
const FeaturedCollection = () => {
  const [featuredCollections, setFeaturedCollections] = useState("new");
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const sliderRef = useRef();

  useEffect(() => {
    GET_FEATURED_PRODUCTS(featuredCollections).then((res) =>
      setProducts(res.data)

    );

    return () => {
      setProducts([]);
    };
  }, [featuredCollections]);

  const settings = {
    dots: false,
    infinite: products.length > 4 ? true : false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Container>
        <FeaturedCollectionContainer>
          <h4>Featured Collections</h4>
          <div className="featured__collection">
            <p
              onClick={() => setFeaturedCollections("new")}
              className={`${
                featuredCollections === "new" && "active__feature"
              }`}
            >
              New In Store
            </p>
            <p
              onClick={() => setFeaturedCollections("on-sale")}
              className={`${
                featuredCollections === "on-sale" && "active__feature"
              }`}
            >
              On Sale
            </p>
          </div>
          <FeaturedCollectionCardContainer>
            <button onClick={() => gotoPrev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="product__container">
              <Slider {...settings} ref={sliderRef}>
                {products.length
                  ? products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  : null}
              </Slider>
            </div>

            <button onClick={() => gotoNext()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </FeaturedCollectionCardContainer>
          <br />
          <span onClick={() => history.push("/products/all-products")}>
            <PrimaryButton>VIEW ALL PRODUCTS</PrimaryButton> <br />
          </span>
        </FeaturedCollectionContainer>
      </Container>
    </>
  );
};

export default FeaturedCollection;
