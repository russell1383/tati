export const handleAddToCart = (cartProducts, setCartProducts, product) => {
  console.log(product);
  product.price = parseInt(product.price);
  product.total_price = Math.round(parseInt(product.price));
  product.quantity = 1;
  product.total_quantity = product.quantity;
  let newProduct = [...cartProducts, product];
  setCartProducts(newProduct);
};

export const handleQuantity = (
  cartProducts,
  setCartProducts,
  pd,
  quantityState
) => {
  let product = cartProducts.find((p) => p.id === pd.id);

  if (product) {
    let productIndex = cartProducts.findIndex((obj) => obj.id === product.id);
    if (quantityState === "increment") {
      product.total_quantity = product.total_quantity + 1;
    } else if (quantityState === "decrement") {
      if (product.total_quantity > 1) {
        product.total_quantity = product.total_quantity - 1;
      } else {
        handleRemoveItemFromCart(cartProducts, setCartProducts, pd.id);
        return;
      }
    }
    product.total_price = product.price * product.total_quantity;
    let updatedProducts = [...cartProducts];
    updatedProducts[productIndex] = product;
    setCartProducts(updatedProducts);
  } else if (quantityState === "increment") {
    handleAddToCart(cartProducts, setCartProducts, pd);
  }
};

export const findProductOnCart = (cartProducts = [], productId = 0) => {
  const product = cartProducts.find((p) => p.id === productId);
  if (product) {
    return {
      exist: true,
      total_quantity: product.total_quantity,
    };
  } else {
    return { exist: false };
  }
};

export const handleRemoveItemFromCart = (
  cartProducts,
  setCartProducts,
  productId
) => {
  const remainingProduct = cartProducts.filter((item) => item.id !== productId);
  setCartProducts(remainingProduct);
};
