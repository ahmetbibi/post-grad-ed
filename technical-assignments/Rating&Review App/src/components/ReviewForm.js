import React from 'react';
import { Form, Input, TextArea, Button, Rating, Modal, Message } from 'semantic-ui-react';

import './styles/ReviewForm.scss';

function ReviewForm({
  handleChange,
  handleSubmit,
  handleRate,
  rating,
  handleOpen,
  modalOpen,
  handleClose,
  validation,
  success,
}) {
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
            <Form onSubmit={handleSubmit} error={validation} success={success}>
              <Message error header='Oops!' content='Rating, First name and Last name required!' />
              <Message
                success
                header='Success!'
                content='Your review has been sent.'
                icon='check'
              />
              <Form.Field
                name='ratingValue'
                value={rating}
                control={Rating}
                maxRating={5}
                defaultRating={0}
                icon='star'
                size='huge'
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
                {/* <Button content="Cancel" negative floated='right'></Button> */}
                <Form.Field
                  control={Button}
                  type='button'
                  negative
                  floated='right'
                  onClick={handleClose}
                >
                  Cancel
                </Form.Field>
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ReviewForm;
