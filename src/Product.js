import React from 'react';
import "./product.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Product = (props) => {
  const { id, title, category, price, description, image, rating } = props;
  return (
    <div style={{ margin: "1rem" }}>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Text> {id}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{category}</Card.Subtitle>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{rating.rate}</Card.Text>
            <Card.Text>{rating.count}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Product;