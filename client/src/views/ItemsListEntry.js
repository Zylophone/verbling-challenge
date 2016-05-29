import React from 'react';

const ItemsListEntry = ({item}) =>
  <div style={{display:item.show ? 'block':'none'}}>
    <div>{item.title}</div>
    <div>{item.body}</div>
  </div>

export default ItemsListEntry
