import React from 'react';
import SearchBar from './SearchBar';
import ItemsList from './ItemsList';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: ['list1', 'list2', 'list3'],
    }
  }
  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar/>
      <ItemsList itemsList = {this.state.list}/>
      </div>
    )
  }
};
