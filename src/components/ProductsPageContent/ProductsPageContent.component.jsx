import { faSquare, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";
import { Container } from "../../constants/container";
import { GET_ALL_PRODUCTS, GET_PRODUCTS } from "../../requests/services";
import useWindowDimensions from "../../utils/windowDimentions";
import Loading from "../Lodading/Loading.component";
import ProductCard from "../ProductCard/ProductCard.component";
import {
  LayoutCustomizeIcon,
  PaginationWrap,
  ProductCustomizeText,
  ProductLayoutCustomize,
  ProductsContainer,
  ProductsPageContentContainer,
} from "./ProductsPageContent.style";

const ProductsPageContent = () => {
  const [changeLayout, setChangeLayout] = useState(false);
  const { height, width } = useWindowDimensions();
  const { categoryName, categoryType, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [allProductInfo, setAllProductInfo] = useState({});

  let totalProducts = allProductInfo && allProductInfo.total;
  let productPerPage = allProductInfo && allProductInfo.per_page;

  useEffect(() => {
    if (categoryName && categoryType && categoryId) {
      setAllProductInfo({});
      let data = { [categoryType]: categoryId };
      GET_PRODUCTS(data).then((res) => {
        console.log(res.data);
        // setProducts(res.data);
        setLoader(false);
      });
    } else {
      let pageNo = parseInt(pageNumber) + 1;
      GET_ALL_PRODUCTS(pageNo)
        .then((res) => {
          setProducts(res.data.data);
          setAllProductInfo(res.data);
          setLoader(false);
        })
        .catch((error) => {});
    }
    return () => {
      setLoader(true);
      setProducts([]);
      setAllProductInfo({});
    };
  }, [categoryName, categoryType, categoryId, pageNumber]);

  const changePage = ({ selected }) => {
    if (parseInt(selected) === 0) {
      setPageNumber(1);
    }
    setPageNumber(selected);
  };

  return loader ? (
    <Loading />
  ) : (
    <ProductsPageContentContainer>
      <h1>{categoryName}</h1>
      <ProductLayoutCustomize>
        <div className="left__section">
          <LayoutCustomizeIcon changeLayout={changeLayout}>
            <FontAwesomeIcon
              icon={faThLarge}
              onClick={() => setChangeLayout(true)}
            />
            {width >= 768 ? (
              <FontAwesomeIcon
                icon={faTh}
                onClick={() => setChangeLayout(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSquare}
                onClick={() => setChangeLayout(false)}
              />
            )}
          </LayoutCustomizeIcon>
        </div>
        <div className="right__section">
          <ProductCustomizeText>Sort</ProductCustomizeText>
          <ProductCustomizeText>Filter</ProductCustomizeText>
        </div>
      </ProductLayoutCustomize>
      <Container>
        <ProductsContainer changeLayout={changeLayout}>
          {products.length
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </ProductsContainer>

        {totalProducts && (
          <PaginationWrap>
            <ReactPaginate
              previousLabel={"Prev"}
              next={"Next"}
              pageCount={Math.ceil(totalProducts / productPerPage)}
              onPageChange={changePage}
              initialPage={pageNumber}
              containerClassName={"pagination_btns"}
              previousLinkClassName={"previous__btn"}
              nextLinkClassName={"next__btn"}
              disabledClassName={"pagination__disabled"}
              activeClassName={"pagination__active"}
            />
          </PaginationWrap>
        )}
      </Container>
    </ProductsPageContentContainer>
  );
};

export default ProductsPageContent;
