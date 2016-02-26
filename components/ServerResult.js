import React,{Component} from 'react';

class ServerResult extends Component{

	
	_saveUser(){
		this.props.actions.saveUser(this.props.searchUser);
	}

	render(){



		return(

					
		
					<div className="row" style={{backgroundColor:'#e6e6e6',marginLeft:0,marginRight:0,padding:5}}>
						
						<div className="col-lg-1">
							<img className="img-circle" 
								 src={this.props.searchUser.avatar}
								 width="65" height="65"/>
						</div>
						<div className="col-lg-11 text-left" style={{lineHeight:4}}>
							<span style={{paddingLeft:50,fontSize:18}}>{this.props.searchUser.userName}</span>

							<span className="pull-right">
								<button className="btn btn-danger btn-lg" 
									    onClick={this._saveUser.bind(this)}>
								<span className="glyphicon glyphicon-chevron-right"></span>
								</button>
								
							</span>
							
						</div>
					</div>



								
		);
	}
}

export default ServerResult