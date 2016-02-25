import React,{Component} from 'react';

class ServerResult extends Component{
	render(){
		return(
		
					<div className="row" style={{backgroundColor:'#e6e6e6',marginLeft:0,marginRight:0,padding:5}}>
						
						<div className="col-lg-1">
							<img className="img-circle" 
								 src=""
								 width="65" height="65"/>
						</div>
						<div className="col-lg-11 text-left" style={{lineHeight:4}}>
							<span style={{paddingLeft:50}}>Nuwan</span>
							<span className="pull-right">
								<button className="btn btn-warning btn-lg">
								<span className="glyphicon glyphicon-chevron-right"></span>
								</button>&nbsp;&nbsp;
								<button className="btn btn-danger btn-lg">
									<span className="glyphicon glyphicon-remove-sign"></span>
								</button>
							</span>
							
						</div>
					</div>
								
		);
	}
}

export default ServerResult