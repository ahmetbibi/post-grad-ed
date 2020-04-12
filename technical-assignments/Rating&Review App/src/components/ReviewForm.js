import React from 'react';
import { Form, Input, TextArea, Button, Rating, Modal } from 'semantic-ui-react';

import './styles/ReviewForm.scss';

function ReviewForm({ handleChange, handleSubmit, handleRate, rating, handleOpen, modalOpen }) {
  return (
    <>
      <Modal
        className='review-form'
        trigger={<Button onClick={handleOpen}>Write a review</Button>}
        basic
        size='small'
        dimmer='blurring'
        open={modalOpen}
      >
        <Modal.Header className='review-main-header'>Write a Review</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Field
                name='ratingValue'
                value={rating}
                control={Rating}
                maxRating={5}
                defaultRating={0}
                icon='star'
                size='large'
                onRate={handleRate}
              />
              <Form.Group widths='equal'>
                <Form.Field
                  control={Input}
                  name='firstName'
                  label='First name'
                  placeholder='First name'
                  onChange={handleChange}
                />
                <Form.Field
                  control={Input}
                  name='lastName'
                  label='Last name'
                  placeholder='Last name'
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Field
                control={Input}
                name='title'
                label='Title'
                placeholder='Comment title'
                onChange={handleChange}
              />
              <Form.Field
                control={TextArea}
                name='comment'
                label='Review'
                placeholder='Tell us your experience about this product...'
                onChange={handleChange}
              />
              <Form.Field control={Button}>Submit</Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ReviewForm;
