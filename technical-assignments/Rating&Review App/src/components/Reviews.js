import React from 'react';
import { Item, Rating, Divider } from 'semantic-ui-react';
import ReviewItem from './styled-components/ReviewItem';

function Reviews({ reviews, productId }) {
  const filteredReviews = reviews.filter((review) => Number(review.id) === productId);
  return filteredReviews.map((review, i) => (
    <Item.Group divided key={i}>
      <Item>
        <Item.Content>
          <Item.Header as='h2'>
            <Rating maxRating={5} defaultRating={review.rating} icon='star' disabled size='huge' />
            <ReviewItem>{' ' + review.firstName + ' ' + review.lastName}</ReviewItem>
          </Item.Header>
          <Item.Description>{review.comment}</Item.Description>
        </Item.Content>
      </Item>
      <Divider hidden />
    </Item.Group>
  ));
}

export default Reviews;
