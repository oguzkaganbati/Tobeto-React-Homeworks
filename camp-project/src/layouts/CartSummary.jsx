import React from "react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
  Icon
} from "semantic-ui-react";

const CartSummary = () => {
  return (
    <div>
      <Dropdown item text="Cart">
        <DropdownMenu>
          <DropdownItem>iPhone X</DropdownItem>
          <DropdownItem>iPhone 13</DropdownItem>
          <DropdownItem>iPhone 15 Pro Max</DropdownItem>
          <DropdownDivider/>
          <DropdownItem as={NavLink} to="/cart">Your Cart</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CartSummary;
