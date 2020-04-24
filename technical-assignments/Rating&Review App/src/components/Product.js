import React, { useState, useEffect } from 'react';
import { Item, Label, Header, Divider, Button } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import Rating from 'react-rating';
import Average from './styled-components/Average';
import RatingContainer from './styled-components/RatingContainer';

// To calculate the average rating value
function calculateAverage(reviews, id) {
  const filteredReviews = reviews.filter((review) => Number(review.id) === Number(id));

  const total = filteredReviews.reduce((acc, review) => {
    acc += review.rating;
    return acc;
  }, 0);

  return (total / filteredReviews.length).toFixed(1);
}

function Product({ products, reviews, setReviews }) {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const averageValue = calculateAverage(reviews, id);
    setAverage(averageValue);
  }, [reviews, id]);

  const { name, mediaUrl, price, sku, description } = products[id - 1];

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose(review) {
    if (review) {
      setReviews([...reviews, { ...review, id }]);
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
            <Item.Description>
              <RatingContainer>
                <Rating
                  initialRating={average}
                  readonly={true}
                  emptySymbol='fa fa-star-o fa-2x'
                  fullSymbol='fa fa-star fa-2x'
                  fractions={10}
                />
                <Average>{isNaN(average) ? '' : average}</Average>
              </RatingContainer>
            </Item.Description>
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
      {reviews.length === 0 && <p>No reviews...</p>}
      <Reviews reviews={reviews} productId={Number(id)} />
    </>
  );
}

export default Product;
