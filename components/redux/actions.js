let actions = {
  searchUser: function(userName) {
  	   
  	 

    return (dispatch)=>{

    	$.ajax({
			      method: "GET",
			      url: "https://api.github.com/users/"+userName,
			      dataType: "json"
			    }).success(function(data){
			    	dispatch(actions.addSearchUser(data))
			    	/*console.log(data)
			    	console.log(data.login)
			    	console.log(data.avatar_url)*/
			    })

    }

  },

  addSearchUser:function(searchUserObj){
  	
  	return{
  		type:'ADD_SEARCH_USER',
  		serverRsltObj:{
  			id:searchUserObj.id,
  			userName:searchUserObj.login,
  			avatar:searchUserObj.avatar_url
  		}
  		
  	}

  },


  saveUser:function(user){
  	
  	return {
  		type:'SAVE_USER',
  		user:user
  		
  	}
  },

  deleteUser:function(userId){
  		return{
  			type:'DELETE_USER',
  			id:userId
  		}
  }
}

export default actions