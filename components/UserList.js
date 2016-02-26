import React,{Component} from 'react';
import UserListItem from './UserListItem';

class UserList extends Component{
	render(){
		return(
		
			<div>
				<div style={{backgroundColor:'#000000',color:'#ffffff',padding:15}}>
				User List ({this.props.UserList.length})
				{this.props.UserList.length>0 && <button className="btn btn-success btn-sm pull-right">Save All</button>}
				</div>
				<div>
					{this.props.UserList.length==0 && 
						<div className="text-center" style={{padding:30,backgroundColor:'#e7e7e7',height:165}}>
							<h4>
								<span className="glyphicon glyphicon-knight" style={{fontSize:30}}>&nbsp;</span>
								Empty User List
							</h4>
						</div>
					}
				
					{this.props.UserList.map((user)=>{
						return <UserListItem  actions={this.props.actions} key={user.id} user={user}/>
					})}
				</div>
				<br/>

			
				

			</div>
				
		);
	}
}

export default UserList