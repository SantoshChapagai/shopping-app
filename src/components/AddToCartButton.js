import React from 'react';
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

const AddToCart = (props) => {
  return (
    <div>
      <Button variant='primary' onClick={props.click}>ADD TO CART</Button>
    </div>
  );
};

export default AddToCart;