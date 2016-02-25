let actions = {
  serverCall: function(userName) {
    return {
      type: 'SERVER_CALL',
      userName:userName
    }
  },

  clearUser:function(userId){
  		alert('clear user')
  		return{
  			type:'CLEAR_USER',
  			userId:userId
  		}
  },

  deleteUser:function(userId){
  	alert('deleteUser')
  		return{
  			type:'DELETE_USER',
  			id:userId
  		}
  }
}

export default actions