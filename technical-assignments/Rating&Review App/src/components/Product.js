import React, { useState, useEffect } from 'react';
import { Item, Label, Header, Divider, Button } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import Rating from 'react-rating';

// To calculate the average rating value
function calculateAverage(reviews) {
  const total = reviews.reduce((acc, review) => {
    acc += review.rating;
    return acc;
  }, 0);
  return (total / reviews.length).toFixed(1);
}

function Product({ products, reviews, setReviews }) {
  let { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const averageValue = calculateAverage(reviews);
    setAverage(averageValue);
  }, [reviews]);

  const { name, mediaUrl, price, sku, description } = products[id - 1];

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose(review) {
    if (review) {
      setReviews([...reviews, review]);
    }
    setModalOpen(false);
  }

  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={mediaUrl} />
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Description>
              <p>${price}</p>
              <Label>SKU: {sku} </Label>
            </Item.Description>
            <Item.Extra>
              <Rating
                className='star-icon'
                initialRating={average}
                readonly={true}
                emptySymbol='fa fa-star-o fa-2x'
                fullSymbol='fa fa-star fa-2x'
                fractions={10}
              />
            </Item.Extra>
            <Divider />
            <Item.Extra>
              <Button onClick={handleOpen}>Write a review</Button>
              <ReviewForm modalOpen={modalOpen} handleClose={handleClose} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Header as='h3'>About this product</Header>
      <p>{description}</p>
      <Item.Extra>
        <Link to='/' className='btn'>
          Back To Products
        </Link>
      </Item.Extra>
      <Divider />

      <Header as='h1'>Reviews</Header>
      <Reviews reviews={reviews} />
    </>
  );
}

export default Product;
