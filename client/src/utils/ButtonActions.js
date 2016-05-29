const ButtonActions = (action, list) => {
  let listItemShow;
  console.log('action:', action);
  if(action === 'toggle'){
    return list.map((item) => {
      return {
      title: item.title,
      body: item.body,
      show: item.show ? false : true
    }});
  } else {
    if(action === 'collapse'){
      listItemShow = false;
    } else if(action === 'expand'){
      listItemShow = true;
    }

    return list.map((item) => {
      return {
      title: item.title,
      body: item.body,
      show: listItemShow
    }})
  }
  return null;
}
export default ButtonActions;
