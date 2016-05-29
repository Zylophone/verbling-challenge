import React from 'react';

const ItemsListEntry = ({item, num, click}) =>
  <ul id='listitem' onClick = {() => click(num)}>
    <li id='listtitle'>{item.title}</li>
    <ul><li id='listbody' style={{display:item.show ? 'block':'none'}}>{item.body}</li></ul>
  </ul>

export default ItemsListEntry;
