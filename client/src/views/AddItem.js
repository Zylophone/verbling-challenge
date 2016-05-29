import React from 'react';
import Button from './Button';

export default class AddItems extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(){
    const title = this.refs.title.value;
    const body = this.refs.body.value;
    this.props.addNewItem(title, body);
  }

  render() {
    return (
      <div id='addnewitem' style={{display:this.props.addItem?'block':'none'}}>
        <div>Create New List Item:</div>
        <div><input type='text' placeholder='Title...' ref='title'/></div>
        <div><textarea id='addnewitembody' type='text' placeholder='Content...' ref='body'/></div>
        <div><Button name = 'Submit' action = {this.submit}/></div>
      </div>
    )
  }
}
