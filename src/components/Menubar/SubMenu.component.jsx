import React, { useEffect, useState } from "react";
import ChildMenu from "./ChildMenu.component";
import { ChildMenuWrapper } from "./Menubar.style";

const SubMenu = ({ openSubMenu, item, menubarState }) => {
  const [childMenuOpen, setChildMenuOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  // let categoryRef = useClickOutside(() => {
  //   setChildMenuOpen(false);
  // });

  return (
    <div>
      <p onClick={() => setChildMenuOpen(!childMenuOpen)}>{item.name}</p>

      <ChildMenuWrapper childMenuOpen={childMenuOpen}>
        {item.subs.length && childMenuOpen
          ? item.subs.map((item, id) => (
              <ChildMenu
                key={item.id}
                item={item}
                menubarState={menubarState}
              />
            ))
          : null}
      </ChildMenuWrapper>
    </div>
  );
};

export default SubMenu;
