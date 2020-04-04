import React from 'react';
import { Item, Label, Header } from 'semantic-ui-react';
import chair from '../static/chair.jpg';

function Product() {
  return (
    <>
      {/* <h1>Hello from component!!!</h1> */}

      <Item.Group>
        <Item>
          <Item.Image size='medium' src={chair} />
          <Item.Content>
            <Item.Header>Chair</Item.Header>
            <Item.Description>
              <p>$500</p>
              <Label>SKU: 102.102.222</Label>
            </Item.Description>
            <Item.Extra></Item.Extra>
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
    </>
  );
}

export default Product;
