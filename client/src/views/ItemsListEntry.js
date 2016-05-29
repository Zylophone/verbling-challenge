import React from 'react';

const ItemsListEntry = ({item}) =>
  <ul id='listitem' style={{display:item.show ? 'block':'none'}}>
    <li id='listtitle'>{item.title}</li>
    <ul><li id='listbody' className='Collapse'>{item.body}</li></ul>
  </ul>

export default ItemsListEntry
