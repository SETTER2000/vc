import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({books = [], onRemove = f => f}) =>
    <div className="row">
        {(books.length === 0) ? "Нет добавленных книг!" :
            books.map(book =>
                <Book key={book.id} {...book} onRemove={() => onRemove(book.id)}/>
            )
        }
    </div>;


BookList.propTypes = {
    books: PropTypes.array,
    onRemove: PropTypes.func
};

export default BookList