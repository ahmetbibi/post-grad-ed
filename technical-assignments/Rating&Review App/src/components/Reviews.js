import React from 'react';
import { Item, Rating, Divider } from 'semantic-ui-react';

function Reviews({ reviews }) {
  return (
    <>
      {reviews &&
        reviews.map((review, i) => (
          <Item.Group divided key={i}>
            <Item>
              <Item.Content>
                <Item.Header as='h3'>
                  <Rating maxRating={5} defaultRating={review.rating} icon='star' disabled />
                  {' ' + review.firstName + ' ' + review.lastName}
                </Item.Header>
                <Item.Description>{review.comment}</Item.Description>
              </Item.Content>
            </Item>
            <Divider />
          </Item.Group>
        ))}
    </>
  );
}

export default Reviews;
