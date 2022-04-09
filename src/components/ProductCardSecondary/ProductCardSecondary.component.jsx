import React from "react";
import { ProductCardSecondaryContainer } from "./ProductCardSecondary.style";
import SecondaryButton from "../Buttons/SecondaryButton.component";
import { IMG_BASE_URL } from "../../requests/api";
import { useHistory } from "react-router";
import saree from '../../assets/images/product-categories-image/saree.jpg'
const ProductCardSecondary = ({ categoryInfo }) => {
  const { name, id, photo } = categoryInfo;
  console.log(categoryInfo);
  const history = useHistory();

  const goToProductPage = (categoryName, categoryType, id) => {
    history.push(`/products/${categoryName}/${categoryType}/${id}`);
  };

  return (
    <>
      <ProductCardSecondaryContainer className="mb-4 rounded">
      {/* <img src={photo && `${IMG_BASE_URL}/categories/${photo}`} alt="hello" /> */}
        <img src={saree}alt="hello" />
        <div className="img__overlay">
          <div className="overlay__content">
            <p>{name}</p>
            <span onClick={() => goToProductPage(name, "category_id", id)}>
              <SecondaryButton>Shop Now</SecondaryButton>
            </span>
          </div>
        </div> 
      </ProductCardSecondaryContainer>
    </>
  );
};

export default ProductCardSecondary;
