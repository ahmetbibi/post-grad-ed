import React, { useState, useEffect } from 'react';
import { Form, Input, TextArea, Button, Rating, Modal, Message } from 'semantic-ui-react';

import './styles/ReviewForm.scss';

function ReviewForm({ modalOpen, handleClose, productId }) {
  const initialState = {
    firstName: '',
    lastName: '',
    comment: '',
    rating: 0,
    id: Number(productId),
  };

  const [review, setReview] = useState(initialState);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  function handleChange(e) {
    const { name, value } = e.target;
    setReview((preState) => ({ ...preState, [name]: value }));
  }

  function handleRate(e, { rating }) {
    setReview((preState) => ({ ...preState, rating }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (review.rating !== 0) {
      handleClose(review);
      setReview(initialState);
    } else {
      setError(true);
    }
  }

  return (
    <Modal className='review-form' basic size='small' dimmer='blurring' open={modalOpen}>
      <Modal.Header className='review-main-header'>Write a Review</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit} error={error}>
            <Message error content='Please give a review' />
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
              <Form.Field control={Button} positive floated='left'>
                Submit
              </Form.Field>
              <Form.Field
                control={Button}
                type='button'
                negative
                floated='right'
                onClick={() => handleClose(null)}
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
