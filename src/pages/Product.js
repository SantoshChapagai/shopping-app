
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AddToCart from '../components/AddToCartButton';

const Product = (props) => {
  const { id, title, category, price, description, image, rating } = props;

  return (
    <div style={{ margin: "1rem" }}>
      <CardGroup>
        <Card style={{ width: '18rem', height: "75rem" }}>
          <Card.Img variant="top" src={image} style={{ width: "auto", height: "15rem" }} />
          <Card.Body>
            <Card.Text> {id}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{category}</Card.Subtitle>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{rating.rate}</Card.Text>
            <Card.Text>{rating.count}</Card.Text>
            <Card.Link><AddToCart /></Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Product;