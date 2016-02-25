import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './redux/actions';
import ServerCallComponent from './ServerCallComponent';
import UserList from './UserList';
import ServerResult from './ServerResult';

class App extends Component{

	constructor(props,context){
		super(props,context);			
	}

	render(){
		return(
			<div>
			<div className="row">
				<div className="col-lg-4 col-lg-offset-1">
					<ServerCallComponent serverCall={this.props.actions.serverCall}/>
					<ServerResult/>
				</div>
				<div className="col-lg-6">
					<UserList actions={this.props.actions}  UserList={this.props.userList}/>	
				</div>
			</div>
				
						
			</div>
		);
	}
}

function mapToProps(state){
	return state;   //state.todos
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapToProps,mapDispatchToProps)(App)
