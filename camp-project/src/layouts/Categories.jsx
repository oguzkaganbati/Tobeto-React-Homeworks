import React from "react";
import { MenuItem, Menu, MenuHeader } from "semantic-ui-react";

const Categories = () => {
  return(
  <div>
    <Menu pointing vertical>
      <MenuHeader>Categories</MenuHeader>
      <MenuItem name="Phones" />
      <MenuItem name="Laptops" />
      <MenuItem name="Parfumes" />
    </Menu>
  </div>
  )
};

export default Categories;
