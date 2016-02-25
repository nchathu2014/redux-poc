import React,{Component} from 'react';
import UserListItem from './UserListItem';

class UserList extends Component{
	render(){
		return(
		
			<div>
				<div style={{backgroundColor:'#000000',color:'#ffffff',padding:5}}>User List</div>
				<div>


					{this.props.UserList.map((user)=>{
						return <UserListItem  actions={this.props.actions} key={user.id} user={user}/>
					})}
				</div>
				<br/>
				<button className="btn btn-success btn-lg">Save All</button>

			</div>
				
		);
	}
}

export default UserList