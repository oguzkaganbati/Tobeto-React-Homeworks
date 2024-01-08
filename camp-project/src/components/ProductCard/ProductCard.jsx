import React from "react";
import { Link } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from "semantic-ui-react";

export default function ProductCard(props) {
  return (
    <div>
      <Card>
        <Image src={props.product.thumbnail} wrapped ui={false} />
        <CardContent>
          <CardHeader>
            <Link to={`/products/${props.product.id}`}>{props.product.title}</Link>
          </CardHeader>
          <CardMeta>
            <span className="date">{props.product.brand}</span>
          </CardMeta>
          <CardDescription>{props.product.description}</CardDescription>
        </CardContent>
        <CardContent extra>
          <a>${props.product.price}</a>
        </CardContent>
      </Card>
    </div>
  );
}
