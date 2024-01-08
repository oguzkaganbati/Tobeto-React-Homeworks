import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  Menu,
} from "semantic-ui-react";

function SignedIn({signedIn}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://github.com/oguzkaganbati.png"
        />  
        <Dropdown pointing="top left" text="Oğuz">
          <DropdownMenu>
            <DropdownItem text="My Profile"/>
            <DropdownItem onClick={signedIn} text="Sign out"/>
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

export default SignedIn;
