import React, { useState } from 'react';
import { Item, Label, Header, Rating, Divider } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

function Product({ products }) {
  const initialState = {
    firstName: '',
    lastName: '',
    comment: '',
  };

  const [review, setReview] = useState(initialState);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [validation, setValidation] = useState(false);
  const [success, setSuccess] = useState(false);

  // To wait to see the success message for 3 seconds
  React.useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => {
        setSuccess(false);
        setModalOpen(false);
      }, 3000);
    }
    if (validation) {
      timeout = setTimeout(() => setValidation(false), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [success, modalOpen, validation]);

  // To get the id parameter from the path
  let { id } = useParams();

  const { name, mediaUrl, price, sku, description } = products[id - 1];

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  function handleRate(e, { rating }) {
    setRating(() => Number(rating));
    console.log(rating);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setReview((preState) => ({ ...preState, [name]: value }));
    console.log(review);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, comment } = review;
    if (rating === 0) {
      setValidation(true);
    } else if (firstName === '' || lastName === '') {
      setValidation(true);
    } else {
      reviews.push({ firstName, lastName, comment, rating });
      setReviews(reviews);
      setReview(initialState);
      setRating(0);
      setValidation(false);
      setSuccess(true);

      // setModalOpen(false);
      console.log(reviews);
    }
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
              <Rating maxRating={5} defaultRating={4} disabled icon='star' size='huge' />
            </Item.Extra>
            <Divider />
            <Item.Extra>
              <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleRate={handleRate}
                rating={rating}
                handleOpen={handleOpen}
                modalOpen={modalOpen}
                handleClose={handleClose}
                validation={validation}
                success={success}
              />
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
