import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';


const Products = () => {
  const history = useHistory()
  const edit = () => history.push('/products/new')

  return (
    <>
      <p>Products</p>
      <Button variant="contained" color="primary" onClick={edit}>
        Editar
      </Button>
    </>
  )
};

export default Products;