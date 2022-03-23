import React from "react";
import { useHistory } from "react-router";

const ChildMenu = ({ item, menubarState }) => {
  const history = useHistory();

  const goToProductPage = (categoryName, categoryType, id) => {
    history.push(`/products/${categoryName}/${categoryType}/${id}`);
    menubarState(false);
  };

  return (
    <>
      <p onClick={() => goToProductPage(item.name, "subcategory_id", item.id)}>
        {item.name}
      </p>
    </>
  );
};

export default ChildMenu;
