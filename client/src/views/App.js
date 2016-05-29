import React from 'react';
import SearchBar from './SearchBar';
import ItemsList from './ItemsList';
import Button from './Button';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {title: 'list1 title', body: 'list1 body', show: false},
        {title: 'list2 title', body: 'list2 body', show: true},
        {title: 'list3 title', body: 'list3 body', show: false}
      ],
    }
  }
  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar/>
      <ItemsList itemsList = {this.state.list}/>
      <div>
        <Button name = 'Toggle All' action = {() => alert('Toggle All!')}/>
        <Button name = 'Collapse All' action = {() => alert('Collapse All!')}/>
        <Button name = 'Expand All' action = {() => alert('Expand All!')}/>
        <Button name = 'Add' action = {() => alert('Add!')}/>
      </div>
      </div>
    )
  }
};
