import React,{Component} from 'react';

class ServerCallComponent extends Component{

	_searchUser(){
		console.log("Entered User : "+this.refs.searchBox.value)
		this.props.actions.searchUser(this.refs.searchBox.value);
		this.refs.searchBox.value="";
		this.refs.searchBox.focus();
	}

	render(){
		return(
					<div>
						<div style={{backgroundColor:'#286090 ',color:'#ffffff',padding:5}}>Search</div>
						<div style={{backgroundColor:'#cccccc',height:90,padding:10}}>
						<input type="text" className="form-control" ref="searchBox"/>
						<div style={{height:5}}>&nbsp;</div>
						<button className="btn btn-primary pull-right" 
							    onClick={this._searchUser.bind(this)}>SEARCH IN GITHUB</button>
					</div>
					</div>
					
				
		);
	}
}

export default ServerCallComponent