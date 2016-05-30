const ButtonActions = (action, list) => {
  let listItemShow;
  if(action === 'toggle'){
    return list.map((item) => {
      return {
      item: item.item,
      show: item.show,
      fullContent: item.fullContent ? false : true
    }});
  } else {
    if(action === 'collapse'){
      listItemShow = false;
    } else if(action === 'expand'){
      listItemShow = true;
    }

    return list.map((item) => {
      return {
      item: item.item,
      show:  item.show,
      fullContent: listItemShow
    }})
  }
  return null;
}
export default ButtonActions;
