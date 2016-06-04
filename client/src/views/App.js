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
        {item: 'list1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 bodylist1 body', show: true, fullContent: false},
        {item: 'list2 body', show: true, fullContent: false},
        {item: 'list3 body', show: true, fullContent: false},
        {item: 'list4 body', show: true, fullContent: false},
        {item: 'list5 body', show: true, fullContent: false},
        {item: 'list6 body', show: true, fullContent: false},
        {item: 'list7 body', show: true, fullContent: false},
        {item: 'list8 body list8 body list8 body list8 body list8 body list8 body list8 body', show: true, fullContent: false},
        {item: 'list9 body', show: true, fullContent: false},
        {item: 'list10 body', show: true, fullContent: false},
        {item: 'list11 body list11 body list11 body list11 body list11 body list11 body list11 body', show: true, fullContent: false},
        {item: 'list12 body', show: true, fullContent: false},
        {item: 'list14 body list14 body', show: true, fullContent: false},
        {item: 'list15 body', show: true, fullContent: false},
        {item: 'list16 bodylist16 bodylist16 body', show: true, fullContent: false},
        {item: 'list17 body', show: true, fullContent: false},
        {item: 'list18 body', show: true, fullContent: false},
        {item: 'list19 body', show: true, fullContent: false},
        {item: 'list20 bodylist20 bodylist20 bodylist20 bodylist20 bodylist20 bodylist20 bodylist20 bodylist20 bodylist20 body', show: true, fullContent: false}
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
        item: item.item,
        show: item.item.indexOf(searchFilter) > -1,
        fullContent: false
      };
    })}
  );
  }

  itemsListActions(action){
    const newList = ButtonActions(action, this.state.list);
    if(newList){
      this.setState({list: newList});
    }
  }

  addNewItem(item){
    const newList = ([
      {
        item: item,
        show: true,
        fullContent: false
      }
    ]).concat(this.state.list);
    this.setState({
      list: newList
    });
  }

  clickItem(id){
    this.state.list[id].fullContent = !this.state.list[id].fullContent;
    this.setState({list: this.state.list});
  }

  render() {
    return (
      <div>
      <h1>Tasks List</h1>
      <SearchBar filterItems = {this.filter}/>
      <ItemsList itemsList = {this.state.list} click = {this.clickItem}/>
      <div className='buttons'>
        <Button name = 'Toggle All' id='toggleButton' action = {() => this.itemsListActions('toggle')}/>
        <Button name = 'Collapse All' id='collapseButton' action = {() => this.itemsListActions('collapse')}/>
        <Button name = 'Expand All' id='expandButton' action = {() => this.itemsListActions('expand')}/>
        <Button name = {this.state.addItem ? 'Close' : 'Add'} id='addButton' action = {() => this.setState({addItem: this.state.addItem? false: true})}/>
      </div>
      <AddItem addItem = {this.state.addItem} addNewItem = {this.addNewItem}/>
      </div>
    )
  }
};
