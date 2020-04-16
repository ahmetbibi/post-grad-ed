import React from 'react';
import { Item, Rating, Divider } from 'semantic-ui-react';
import './styles/Reviews.scss';

function Reviews({ reviews, productId }) {
  const filteredReviews = reviews.filter((review) => Number(review.id) === productId);
  return filteredReviews.map((review, i) => (
    <Item.Group divided key={i}>
      <Item>
        <Item.Content>
          <Item.Header as='h2'>
            <Rating maxRating={5} defaultRating={review.rating} icon='star' disabled size='huge' />
            <span className='reviews-rating'>{' ' + review.firstName + ' ' + review.lastName}</span>
          </Item.Header>
          <Item.Description>{review.comment}</Item.Description>
        </Item.Content>
      </Item>
      <Divider />
    </Item.Group>
  ));
}

export default Reviews;
