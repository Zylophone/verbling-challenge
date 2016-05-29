import React from 'react';
import ItemsListEntry from './ItemsListEntry';

const ItemsList = ({itemsList, click}) => (
  <div>
  {itemsList.map((item, index) => <ItemsListEntry item={item} key={index} num={index} click = {click}/>)}
  </div>
);


export default ItemsList
