import React, { useEffect, useState } from "react";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  ShopCategoriesContainer,
  ShopCategoriesContent,
  ShopCategoriesWrapper,
  ShopCatImgContainer,
} from "./ShopCategories.style";
import img1 from "../../assets/images/shop-category-imgs/shop-cat-img-2.jpg";
import img2 from "../../assets/images/shop-category-imgs/shop-cat-img-1.jpg";
import img3 from "../../assets/images/shop-category-imgs/shop-cat-img-3.jpg";
import { GET_PRODUCT_CATEGORIES_CALL } from "../../requests/services";
import { useHistory } from "react-router";

const ShopCategories = ({ shopCategoriesState }) => {
  const [shopCategoriesOpen, setShopCategoriesOpen] = shopCategoriesState;
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  let shopCategoriesRef = useClickOutside(() => {
    setShopCategoriesOpen(false);
  });

  useEffect(() => {
    GET_PRODUCT_CATEGORIES_CALL().then((response) => {
      setCategories(response.data);
    });
  }, []);

  const goToProductPage = (categoryName, categoryType, id) => {
    history.push(`/products/${categoryName}/${categoryType}/${id}`);
    setShopCategoriesOpen(false);
  };

  return (
    <ShopCategoriesWrapper shopCategoriesOpen={shopCategoriesOpen}>
      <ShopCategoriesContainer
        onMouseLeave={() => setShopCategoriesOpen(false)}
      >
        <ShopCategoriesContent ref={shopCategoriesRef}>
          {categories.length
            ? categories.map((category) => (
                <div key={category.id}>
                  <small
                    onClick={() =>
                      goToProductPage(category.name, "category_id", category.id)
                    }
                  >
                    {category.name}
                  </small>
                  <br />
                  <br />
                  {category.subs
                    ? category.subs.map((item) => (
                        <p
                          key={item.id}
                          onClick={() =>
                            goToProductPage(
                              item.name,
                              "subcategory_id",
                              item.id
                            )
                          }
                        >
                          {item.name}
                        </p>
                      ))
                    : null}
                </div>
              ))
            : null}
        </ShopCategoriesContent>

        <ShopCatImgContainer>
          <img src={img1} alt="" />
          <div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </ShopCatImgContainer>
      </ShopCategoriesContainer>
    </ShopCategoriesWrapper>
  );
};

export default ShopCategories;
