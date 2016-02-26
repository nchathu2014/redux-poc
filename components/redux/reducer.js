
let reducer = function(state, action) {
  switch (action.type) {
    
  	case 'SEARCH_USER':
  		return state;

  	case 'ADD_SEARCH_USER':
  		return Object.assign({},state,{
    		serverRsltObj:{
    			id:action.serverRsltObj.id,
    			userName:action.serverRsltObj.userName,
    			avatar:action.serverRsltObj.avatar
    		}

    	},...state.serverRsltObj)

    case 'CLEAR_USER':
      return state;

    case 'DELETE_USER':
    	return Object.assign({},state,{
    		userList:state.userList.filter((user)=>{
    			return user.id!==action.id
    		})
    	},...state.userList)
    	
    case 'SAVE_USER':
    	return Object.assign({}, state, {
        userList: [{
          id: action.user.id,
          userName: action.user.userName,
          avatar: action.user.avatar,
          htmlUrl:action.user.htmlUrl
        }, ...state.userList]
      });

    default: 
      return state;
  }
}

export default reducer