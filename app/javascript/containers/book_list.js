import React from 'react';

import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
 import { bindActionCreators } from 'redux';
// import BookListItem from './book_list_item';


 class BookList extends React.Component
{

renderList() {
return this.props.books.map((book) => {
	return (
		<li key={book.title}> {book.title} </li>
 
		);
});
}

render()
{



return (
		<div>
		<ul >
		{this.renderList()}

		</ul>
		</div>

		)
}
}


function mapStateToProps(state) {

return {
	books: state.books
};

}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);