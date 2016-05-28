import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar/>
      </div>
    )
  }
};
