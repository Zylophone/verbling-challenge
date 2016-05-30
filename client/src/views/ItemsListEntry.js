import React from 'react';

const ItemsListEntry = ({item, num, click}) =>
  <ul className='listitem' onClick = {() => click(num)} style={{display:item.show ? 'block':'none'}}>
    <li className={item.fullContent?'showContent':'hideContent'}>{item.item}</li>
  </ul>

export default ItemsListEntry;
