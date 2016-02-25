import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './redux/actions';
import ServerCallComponent from './ServerCallComponent';

class App extends Component{

	constructor(props,context){
		super(props,context);			
	}

	render(){
		return(
			<div>
				<ServerCallComponent serverCall={this.props.actions.serverCall}/>			
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
