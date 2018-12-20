import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import StringForm from "./StringForm";

const BookList = ({books = [], onRate = f => f, onRemove = f => f}) =>
    <div className="row">
        {(books.length === 0) ? <StringForm str="Добавьте книгу..."/> :
            books.map(book =>
                <Book key={book.id} {...book}
                      onRate={(rating)=>onRate(book.id, rating)}
                      onRemove={() => onRemove(book.id)}/>
            )
        }
    </div>;


BookList.propTypes = {
    books: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

export default BookList