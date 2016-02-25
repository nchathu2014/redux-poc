let actions = {
  serverCall: function(userName) {
    return {
      type: 'SERVER_CALL',
      data:userName
    }
  }
}

export default actions