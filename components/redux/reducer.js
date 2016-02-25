
let reducer = function(state, action) {
  switch (action.type) {
    case 'SERVER_CALL':
      return Object.assign({},state,{
      	
      },...state)

    default: 
      return state;
  }
}

export default reducer