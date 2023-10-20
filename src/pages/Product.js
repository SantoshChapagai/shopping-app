
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./pages.css";
import AddToCart from '../components/AddToCartButton';

const Product = (props) => {
  const { id, title, category, price, description, image, rating } = props;

  const [show, setShow] = useState(false);

  const toggleDescription = () => {
    setShow(!show);
  }

  const showHandler = () => {
    if (show) {
      return <Card.Text>{description}</Card.Text>;
    } else {
      return <Card.Text>{description.slice(0, 100)}...</Card.Text>
    }
  }

  const totalHeight = show ? "auto" : "48rem";

  return (

    <div style={{ margin: "1rem" }}>
      <CardGroup>
        <Card style={{ width: '18rem', height: totalHeight }}>
          <Card.Img variant="top" src={image} style={{ width: "auto", height: "15rem" }} />
          <Card.Body>
            <Card.Text> {id}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{category}</Card.Subtitle>
            <Card.Text>Price {price}€</Card.Text>
            <Card.Text>Rating: {rating.rate}</Card.Text>
            <Card.Text>Rated: {rating.count} times</Card.Text>
            <div style={{ marginBottom: "1rem" }}>
              {showHandler()}
              <Card.Link onClick={toggleDescription} style={{ cursor: "pointer" }}>
                {show ? 'See Less' : 'See More'}
              </Card.Link>
            </div>
            <Card.Link><AddToCart /></Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>

  );
};

export default Product;