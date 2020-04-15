import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

function ProductList({ products }) {
  const [location, setLocation] = useState();

  function mapProductsToItems(products) {
    return products.map((product) => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'teal',
      fluid: true,
      childKey: product.id,
      onClick: () => setLocation(`/product/${product.id}`),
    }));
  }

  if (location) {
    return <Redirect to={location} />;
  }

  return <Card.Group stackable itemsPerRow={3} centered items={mapProductsToItems(products)} />;
}

export default ProductList;
