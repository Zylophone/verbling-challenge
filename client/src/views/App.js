import React from 'react';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
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
      addItem: false
    }
    this.filter = this.filter.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }

  filter(searchFilter) {
    this.setState({
      list: this.state.list.map(item => {
      return {
        title: item.title,
        body: item.body,
        show: item.title.indexOf(searchFilter) > -1 || item.body.indexOf(searchFilter) > -1,
        fullContent: false
      };
    })}
  );
  }

  itemsListActions(action){
    const newList = ButtonActions(action, this.state.list);
    this.setState({list: newList});
  }

  addNewItem(title, body){
    const newList = ([
      {
        title: title,
        body: body,
        show: true
      }
    ]).concat(this.state.list);
    this.setState({
      list: newList
    });
  }

  clickItem(id){
    //this.state.list[id].show = this.state.list[id].show ? false : true;
    this.state.list[id].show = true;
    this.state.list[id].fullContent = this.state.list[id].fullContent ? false : true;
    this.setState({list: this.state.list});
  }

  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar filterItems = {this.filter}/>
      <AddItem addItem = {this.state.addItem} addNewItem = {this.addNewItem}/>
      <ItemsList itemsList = {this.state.list} click = {this.clickItem}/>
      <div>
        <Button name = 'Toggle All' action = {() => this.itemsListActions('toggle')}/>
        <Button name = 'Collapse All' action = {() => this.itemsListActions('collapse')}/>
        <Button name = 'Expand All' action = {() => this.itemsListActions('expand')}/>
        <Button name = {this.state.addItem ? 'Close' : 'Add'} action = {() => this.setState({addItem: this.state.addItem? false: true})}/>
      </div>
      </div>
    )
  }
};
