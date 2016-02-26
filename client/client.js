import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import configureStore from '../components/redux/store';
import {Provider} from 'react-redux';

let initialState={

	userList:[
		/*{
			id:0,
			avatar:'https://avatars.githubusercontent.com/u/9334623?v=3',
			userName:'nchathu2014'
		},
		{
			id:1,
			avatar:'https://avatars.githubusercontent.com/u/9334623?v=3',
			userName:'DON'
		}*/
	],

	serverRsltObj:{
			id:51440329,
			avatar:'https://avatars.githubusercontent.com/u/9334623?v=3',
			userName:'nchathu2014',
			htmlUrl:"https://github.com/nchathu2014"
	}
	//https://api.github.com/users/nchathu2014/repos
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);