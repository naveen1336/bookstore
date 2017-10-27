import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BookList from '../containers/book_list';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
export default class App extends Component
{


render()
{
	return (
		<div>
		<BookList />
		</div>
		);
}

}

const createStoreWithMiddleware = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
	ReactDom.render(
	  <Provider store={createStoreWithMiddleware(reducers)}>
	    <App />
	  </Provider>
	, document.querySelector('.container'));

});
