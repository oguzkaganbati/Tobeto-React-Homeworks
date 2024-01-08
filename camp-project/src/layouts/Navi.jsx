import React, { useState }  from "react";
import { MenuMenu, MenuItem, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  
  function handleSignOut(params) {
    setIsAuthenticated(true)
    
  }
  function handleSignIn(params) {
    setIsAuthenticated(false)
  }
  

  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem name="home" />
        <MenuItem name="messages" />
        <MenuMenu position="right">
          <CartSummary />
          {isAuthenticated?<SignedIn signedIn={handleSignIn} />: <SignedOut signedOut={handleSignOut}/>}
        </MenuMenu>
      </Container>
    </Menu>
  );
};

export default Navi;
