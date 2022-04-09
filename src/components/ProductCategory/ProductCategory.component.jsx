import React, { useEffect, useState } from "react";
import { Container } from "../../constants/container";
import { GET_PRODUCT_CATEGORIES_CALL } from "../../requests/services";
import ProductCardSecondary from "../ProductCardSecondary/ProductCardSecondary.component";
import { ProductCategoryContainer } from "./ProductCategory.style";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GET_PRODUCT_CATEGORIES_CALL()
      .then((response) => {
      setCategories(response.data);
      // console.log(response);
    });
  }, []);

  console.log(categories);

  return (
    <>
      <Container>
        <ProductCategoryContainer>
          {categories.length
            ? categories.map((category) => (
                <ProductCardSecondary
                  key={category.id}
                  categoryInfo={category}
                />
              ))
            : null}
        </ProductCategoryContainer>
      </Container>
    </>
  );
};

export default ProductCategory;
