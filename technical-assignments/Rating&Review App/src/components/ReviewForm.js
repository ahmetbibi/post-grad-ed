import React, { useState } from 'react';
import { Form, Input, TextArea, Button, Rating, Modal } from 'semantic-ui-react';

const initialState = {
  firstName: '',
  lastName: '',
  comment: '',
  rating: 0,
};

function ReviewForm({ modalOpen, handleClose }) {
  const [review, setReview] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setReview((preState) => ({ ...preState, [name]: value }));
  }

  function handleRate(e, { rating }) {
    setReview((preState) => ({ ...preState, rating }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleClose(review);
    setReview(initialState);
  }

  return (
    <Modal size='small' dimmer='blurring' open={modalOpen}>
      <Modal.Header>Write a Review</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Field
              name='ratingValue'
              value={review.rating}
              control={Rating}
              maxRating={5}
              defaultRating={0}
              icon='star'
              size='massive'
              onRate={handleRate}
              required={true}
            />

            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                name='firstName'
                label='First name'
                placeholder='First name'
                onChange={handleChange}
                required
              />
              <Form.Field
                control={Input}
                name='lastName'
                label='Last name'
                placeholder='Last name'
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Field
              control={TextArea}
              name='comment'
              label='Review'
              placeholder='Tell us your experience about this product...'
              onChange={handleChange}
            />
            <Form.Group widths='equal'>
              <Form.Field control={Button} positive floated='left' disabled={review.rating === 0}>
                Submit
              </Form.Field>
              <Form.Field
                control={Button}
                type='button'
                negative
                floated='right'
                onClick={() => {
                  handleClose(null);
                  setReview(initialState);
                }}
              >
                Cancel
              </Form.Field>
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default ReviewForm;
