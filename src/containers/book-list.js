import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>    
        );
    }
}

function mapStateToProps(state) {
    // whatever ids retrurned from here will show up as props inside of BookList
    return {
        books: state.books
    };
}
// Anything returned from this function will emd up as props
// on the BookList container
function mapDispacthToProps(dispatch) {
    //whenever selectBook is called, the result should be passes to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispacth method, selectBook. Make it availble
// as  a  prop
export default connect(mapStateToProps, mapDispacthToProps)(BookList);