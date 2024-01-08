import React from "react";
import { Button } from "semantic-ui-react";
import "./customStyles.css"; 

function SignedOut({signedOut}) {
  return (
    <div>
        <Button className="customButton" onClick={signedOut}>Sign in</Button>
        <Button className="customButton">Sign up</Button>
    </div>
  );
}

export default SignedOut;
