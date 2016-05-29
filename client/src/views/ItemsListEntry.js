import React from 'react';

const ItemsListEntry = ({item, num, click}) =>
  <ul className='listitem' onClick = {() => click(num)} style={{display:item.show ? 'block':'none'}}>
    <li className='listtitle'>{item.title}</li>
    <ul><li className={item.fullContent?'showContent':'hideContent'}>{item.body}</li></ul>
  </ul>

export default ItemsListEntry;
