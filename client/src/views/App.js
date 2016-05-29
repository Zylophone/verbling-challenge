import React from 'react';
import SearchBar from './SearchBar';
import ItemsList from './ItemsList';
import Button from './Button';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {title: 'list1 title', body: 'list1 body', show: true},
        {title: 'list2 title', body: 'list2 body', show: true},
        {title: 'list3 title', body: 'list3 body', show: true}
      ],
    }
    this.filter = this.filter.bind(this);
  }

  filter(searchFilter) {
    console.log('filter:', this);

    // for(let i=0; i<this.state.list.length; i++){
    //   if(this.state.list[i].title.indexOf(searchFilter) > -1 || this.state.list[i].body.indexOf(searchFilter) > -1){
    //     this.setState(this.state.list[i].show , true);
    //     console.log('contains...', this.state.list[i].title);
    //   } else {
    //     this.state.list[i].show = false;
    //     console.log('does not contains...', this.state.list[i].title);
    //   }
    // }
    this.setState({
      list: _.map(this.state.list, (item) => {
      return {
        title: item.title,
        body: item.body,
        show: item.title.indexOf(searchFilter) > -1 || item.body.indexOf(searchFilter) > -1
      };
    })}
  );
    // const newList = _.map(this.state.list, (item) => {
    //   return {
    //     title: item.title,
    //     body: item.body,
    //     show: item.title.indexOf(searchFilter) > -1 || item.body.indexOf(searchFilter) > -1
    //   };
    // });
    // this.setState({list: newList});
    //
    // console.log('new list:', newList);

  }


  render() {
    return (
      <div>
      <div>Tasks List</div>
      <SearchBar filterItems = {this.filter}/>
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
