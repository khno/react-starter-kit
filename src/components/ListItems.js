import React from 'react';

const ListItems = props => (
  <ul>
    {
      props.items.map(
        (item, index) => <li key={index}>{item}</li>
      )
    }
  </ul>
);

export default ListItems;