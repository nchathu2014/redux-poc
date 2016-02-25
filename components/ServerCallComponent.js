import React,{Component} from 'react';

class ServerCallComponent extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-lg-6">
					<input type="text" className="form-control"/>
					<button className="btn btn-primary">Get GitHub Data</button>
				</div>
				<div className="col-lg-6">
					Right
				</div>
			</div>
		);
	}
}

export default ServerCallComponent