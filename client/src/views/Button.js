import React from 'react';

const Button = ({name, id, action}) => <button type='text' id={id} onClick={action}>{name}</button>

export default Button
