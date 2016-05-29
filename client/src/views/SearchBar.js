import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.debouncedHandleChange = _.debounce(this.handleChange, 300);
  }

  handleChange(){
    this.props.filterItems(this.refs.search.value);
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search...' ref='search' onChange={this.debouncedHandleChange.bind(this)} />
      </div>
    )
  }
}
