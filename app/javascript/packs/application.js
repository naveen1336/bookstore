import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BookList from '../containers/book_list';



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

document.addEventListener('DOMContentLoaded', () => {

  ReactDom.render(<App />, document.querySelector('.container'));
});
