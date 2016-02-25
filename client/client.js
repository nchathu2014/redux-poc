import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import configureStore from '../components/redux/store';
import {Provider} from 'react-redux';

let initialState={

	gitObj:[]
	//https://api.github.com/users/nchathu2014/repos
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);