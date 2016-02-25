import React,{Component} from 'react';

class UserListItem extends Component{

	_deleteUser(){
		this.props.actions.deleteUser(this.props.user.id)
	}

	render(){
		return(
		
					<div className="row" style={{backgroundColor:'#e6e6e6',marginLeft:0,marginRight:0,padding:5,borderBottom:'2px dotted #000000'}}>
						
						<div className="col-lg-1">
							<img className="img-circle" 
								 src={this.props.user.avatar}
								 width="65" height="65"/>
						</div>
						<div className="col-lg-11 text-left" style={{lineHeight:4}}>
							<span style={{paddingLeft:20}}>{this.props.user.userName}</span>
							<button className="btn btn-danger btn-lg pull-right" 
							 onClick={this._deleteUser.bind(this)}>
								<span className="glyphicon glyphicon-trash"></span>
							</button>
						</div>
					</div>
								
		);
	}
}

export default UserListItem