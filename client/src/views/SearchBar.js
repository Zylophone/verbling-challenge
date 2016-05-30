import React from 'react';
import {debounce} from 'lodash';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.debouncedHandleChange = debounce(this.handleChange, 300);
  }

  handleChange(){
    this.props.filterItems(this.refs.search.value);
  }

  render() {
    return (
      <div id='searchbar'>
        <input type='text' placeholder='Search...' ref='search' onChange={this.debouncedHandleChange.bind(this)} />
      </div>
    )
  }
}
