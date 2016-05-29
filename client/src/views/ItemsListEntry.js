import React from 'react';

const ItemsListEntry = ({item, num}) =>
  <ul id='listitem' >
    <li id='listtitle'>{item.title}</li>
    <ul><li id='listbody' style={{display:item.show ? 'block':'none'}}>{item.body}</li></ul>
  </ul>

export default ItemsListEntry
