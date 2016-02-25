import React,{Component} from 'react';

class ServerCallComponent extends Component{
	render(){
		return(
					<div>
						<div style={{backgroundColor:'#286090 ',color:'#ffffff',padding:5}}>Search</div>
						<div style={{backgroundColor:'#cccccc',height:90,padding:10}}>
						<input type="text" className="form-control"/>
						<div style={{height:5}}>&nbsp;</div>
						<button className="btn btn-primary pull-right">SEARCH IN GITHUB</button>
					</div>
					</div>
					
				
		);
	}
}

export default ServerCallComponent