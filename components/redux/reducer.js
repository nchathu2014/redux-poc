
let reducer = function(state, action) {
  switch (action.type) {
    case 'SERVER_CALL':
      return state;

    case 'REMOVE_USER':
      return state;

    case 'DELETE_USER':
    	return Object.assign({},state,{
    		userList:state.userList.filter((user)=>{
    			return user.id!==action.id
    		})
    	},...state.userList)
    	

    default: 
      return state;
  }
}

export default reducer