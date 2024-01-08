import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Button, Card, Image, Icon, CardContent, CardHeader, CardGroup, CardMeta, CardDescription} from "semantic-ui-react";
function ProductDetailCard(props) {
  return (
    <div>
      <CardGroup>
        <Card fluid centered>
          <Image src={props.product.thumbnail} size="large" rounded centered />
          <CardContent>
            <CardHeader>{props.product.title}</CardHeader>
            <CardMeta>{props.product.brand}</CardMeta>
            <CardDescription>{props.product.description}</CardDescription>
          </CardContent>
          <CardContent fontSize="large">
            ${props.product.price}
          </CardContent>
          <CardContent extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Add to your cart
              </Button>
              <Button basic color="red">
                Remove from your cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ProductDetailCard;
