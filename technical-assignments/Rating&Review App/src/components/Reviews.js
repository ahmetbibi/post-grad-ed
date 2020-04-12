import React from 'react';
import { Item, Rating, Divider } from 'semantic-ui-react';

function Reviews({ reviews }) {
  return (
    <>
      {reviews &&
        reviews.map((review) => (
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header as='h3'>
                  <Rating maxRating={5} defaultRating={review.rating} icon='star' disabled />
                  {' ' + review.firstName + ' ' + review.lastName}
                </Item.Header>
                <Item.Content>
                  <Item.Header as='h2'>{review.title}</Item.Header>
                </Item.Content>
                {/* <Item.Meta>Description</Item.Meta> */}
                <Item.Description>{review.comment}</Item.Description>
                {/* <Item.Extra>Additional Details</Item.Extra> */}
              </Item.Content>
            </Item>
            <Divider />
          </Item.Group>
        ))}
    </>
  );
}

export default Reviews;
