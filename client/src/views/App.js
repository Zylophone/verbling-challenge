import React from 'react';
import SearchBar from './SearchBar';
import ItemsList from './ItemsList';
import Button from './Button';
import ButtonActions from '../utils/ButtonActions';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {title: 'list1 title', body: 'list1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 body', show: true},
        {title: 'list2 title', body: 'list2 body', show: false},
        {title: 'list3 title', body: 'list3 body', show: true}
      ],
    }
    this.filter = this.filter.bind(this);
  }

  filter(searchFilter) {
    this.setState({
      list: this.state.list.map(item => {
      return {
        title: item.title,
        body: item.body,
        show: item.title.indexOf(searchFilter) > -1 || item.body.indexOf(searchFilter) > -1
      };
    })}
  );
  }

  itemsListActions(action){
    console.log('itemsListActions'+action);
    const newList = ButtonActions(action, this.state.list);
    this.setState({list: newList});
  }

  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar filterItems = {this.filter}/>
      <ItemsList itemsList = {this.state.list}/>
      <div>
        <Button name = 'Toggle All' action = {() => this.itemsListActions('toggle')}/>
        <Button name = 'Collapse All' action = {() => this.itemsListActions('collapse')}/>
        <Button name = 'Expand All' action = {() => this.itemsListActions('expand')}/>
        <Button name = 'Add' action = {() => alert('Add!')}/>
      </div>
      </div>
    )
  }
};
