import React from 'react';
import Button from './Button';

export default class AddItems extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(){
    const body = this.refs.body.value;
    this.props.addNewItem(body);
    this.refs.body.value = '';
  }

  render() {
    return (
      <div id='addnewitem' style={{display:this.props.addItem?'block':'none'}}>
        <h3>Create New List Item:</h3>
        <div><textarea id='addnewitembody' type='text' placeholder='new item...' ref='body'/></div>
        <div><Button name = 'Submit' action = {this.submit}/></div>
      </div>
    )
  }
}
