import React from 'react';
import Button from 'react-bootstrap/Button';
import { useCart } from '../hooks/Context';

// import { Button } from 'react-bootstrap';

const AddToCart = () => {
  const { count, setCount } = useCart();

  const addHandler = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Button variant='primary' onClick={addHandler}>ADD TO CART</Button>
    </div>

  );
};

export default AddToCart;