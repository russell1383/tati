import React, { useContext, useEffect, useState } from "react";
import {
  ColorBox,
  ProductImgContainer,
  ProductInfoContentContainer,
  ProductInfoWrap,
  ProductsDetailsContainer,
  SizeColorContainer,
} from "./ProductInfoContent.style";
// import { UserContext } from "../../App";
import { Container } from "../../constants/container";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import TertiaryButton from "../Buttons/TertiaryButton.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useWindowDimensions from "../../utils/windowDimentions";
import { GET_PRODUCTS } from "../../requests/services";
import { useHistory, useParams } from "react-router";
import { IMG_BASE_URL } from "../../requests/api";
import Loading from "../Lodading/Loading.component";
import QuantitySelectorBox from "../QuantitySelectorBox/QuantitySelectorBox.component";
import { handleAddToCart, findProductOnCart } from "../../utils/cartManagement";
import useAuth from "../../hooks/useAuth";

const ProductInfoContent = () => {
  // const { user, products } = useContext(UserContext);
  const { user, products } = useAuth();
  const [cartProducts, setCartProducts] = products;
  const { height, width } = useWindowDimensions();
  const [porductInfo, setProductInfo] = useState({});
  const { productId } = useParams();
  let {
    id,
    name,
    photo,
    policy,
    price,
    size,
    galleries,
    colors,
    details,
    stock,
    size_price,
    previous_price,
  } = porductInfo;
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);
  const history = useHistory();

  useEffect(() => {
    let data = { product_id: productId };
    GET_PRODUCTS(data).then((res) => {
      if (res.data.length) {
        let response = res.data[0];
        setProductInfo(response);

        if (response && response.galleries.length) {
          setImages(
            response.galleries.map((url) => ({
              original: `${IMG_BASE_URL}/galleries/${url.photo}`,
              thumbnail: `${IMG_BASE_URL}/galleries/${url.photo}`,
            }))
          );
          setLoader(false);
        } else {
          setImages([
            {
              original: `${IMG_BASE_URL}/products/${response.photo}`,
              thumbnail: `${IMG_BASE_URL}/products/${response.photo}`,
            },
          ]);
          setLoader(false);
        }
      } else {
        history.push("/produt-info/not-found");
      }
    });
  }, [productId]);

  return !loader ? (
    <>
      <ProductInfoWrap>
        <Container>
          <ProductInfoContentContainer>
            <ProductImgContainer>
              {images.length ? (
                <ImageGallery
                  thumbnailPosition={width >= 768 ? "left" : "bottom"}
                  items={images}
                  showPlayButton={false}
                />
              ) : null}
            </ProductImgContainer>

            <ProductsDetailsContainer>
              <h1>{name}</h1>
              <small>SKU: SRBGKOTA042</small>
              <br />
              <p>Bdt. {Math.round(parseInt(price))}.00</p>
              <br />

              <SizeColorContainer>
                <div className="sizes__wrap">
                  <h2>Size</h2>
                  <div>
                    {size.length
                      ? size.map((size, idx) => (
                          <span key={idx} className="size__box">
                            {size}
                          </span>
                        ))
                      : null}
                  </div>
                </div>
                <div className="colors__wrap">
                  {" "}
                  <h2>Colors</h2>
                  <span>
                    {["red", "green", "yellow", "purple"].map((color) => (
                      <ColorBox clr={color} />
                    ))}
                  </span>
                </div>
              </SizeColorContainer>
              <br />

              <span className="quantity__wrapper">
                <QuantitySelectorBox porductInfo={porductInfo} />
              </span>
              <br />

              {/* ----------Button Group -------------*/}
              <button
                onClick={() =>
                  handleAddToCart(cartProducts, setCartProducts, porductInfo)
                }
                disabled={findProductOnCart(cartProducts, id).exist && true}
              >
                <TertiaryButton>
                  {findProductOnCart(cartProducts, id).exist
                    ? "Product Already on Cart"
                    : `Add to cart . Bdt. ${Math.round(parseInt(price))}`}
                </TertiaryButton>
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  if (!findProductOnCart(cartProducts, id).exist) {
                    handleAddToCart(cartProducts, setCartProducts, porductInfo);
                  }
                  history.push("/checkout");
                }}
              >
                <PrimaryButton outlined={true}>Buy it now</PrimaryButton>
              </button>
              <br />

              {/* ----------------------Product Spacifications Section ----------------------*/}
              <br />
              <br />
              <h2>Product Spacifications</h2>
              <br />

              <div dangerouslySetInnerHTML={{ __html: details }}></div>
              {/* <ul>
                <li>
                  Saree Length: 5.5 meters saree, 0.9 meters blouse piece |
                  Width: 45 inches
                </li>
                <li>Fabric: Kota Doria Cotton</li>
                <li>Craft: Bagru</li>
                <li>Wash Care: Dry Clean only.</li>
              </ul> */}
              <br />

              {/* ----------------------Shipping Section ----------------------*/}

              <br />
              <h6>
                <u>Shipping</u>
              </h6>
              <br />
              <p>Shipped within 2-4 working days</p>
              <br />

              {/* ----------------------Returns & Exchanges Section ----------------------*/}

              <br />
              <h6>
                <u>Returns & Exchanges</u>
              </h6>
              <br />
              <p>
                This item is eligible for return. Store credit will be provided
                against the value of returned item. Refunds are only provided in
                case the product is damaged/defective. Please note that
                colour/motif/print irregularities do not amount to damage/defect
                in the product as minor irregularities like these are an
                inherent part of handcrafted products.{" "}
              </p>
              <br />

              {/* ----------------------More Info Section ----------------------*/}

              <br />
              <h6>
                <u>More Info</u>
              </h6>
              <br />
              <p>
                The print might have slight irregularities in the motif &
                colours which results from the human involvement in the process
                & is a hallmark of handcrafted products.
                <br />
                <br />
                Since the fabric is dyed using natural, vegetable dyes, it may
                rub dry or bleed colour on coming in contact with water for the
                first time.
              </p>
              <br />
              <small>
                Share &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faFacebookF} />
                &nbsp; &nbsp;
                <FontAwesomeIcon icon={faTwitter} />
                &nbsp; &nbsp;
                <FontAwesomeIcon icon={faPinterest} />
                &nbsp; &nbsp;
              </small>
            </ProductsDetailsContainer>
          </ProductInfoContentContainer>
        </Container>
      </ProductInfoWrap>
    </>
  ) : (
    <Loading />
  );
};

export default ProductInfoContent;
