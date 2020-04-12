import React, { useState } from 'react';
import { Item, Label, Header, Rating, Divider } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

function Product({ products }) {
  const initialState = {
    firstName: '',
    lastName: '',
    title: '',
    comment: '',
  };

  const [review, setReview] = useState(initialState);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // To get the id parameter from the path
  let { id } = useParams();

  const { name, mediaUrl, price, sku } = products[id - 1];

  function handleOpen() {
    setModalOpen(true);
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
    const { firstName, lastName, title, comment } = review;
    reviews.push({ firstName, lastName, title, comment, rating });
    setReviews(reviews);
    setReview(initialState);
    setRating(0);
    setModalOpen(false);
    console.log(reviews);
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
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Header as='h3'>About this product</Header>
      <p>
        Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque
        sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris
        sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis
        mattis egestas metus.
      </p>
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
