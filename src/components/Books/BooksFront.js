import React from 'react';
import {Component} from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import {v4} from 'uuid'
import '../../styles/BooksFront.scss'

export default class BooksFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.addBook = this.addBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.rateBook = this.rateBook.bind(this);
    }

    addBook(title, author, description) {
        this.setState(prevState => ({
            books: [
                ...prevState.books,
                {
                    id: v4(),
                    title,
                    author,
                    description,
                    rating: 0

                }
            ]
        }))
    }

    removeBook(id) {
        this.setState(prevState => ({
            // Функция filter возвращает тот же массив за исключением найденного id
            books: prevState.books.filter(book => book.id !== id)
        }))
    }

    rateBook(id, rating) {
        this.setState(prevState => ({
            books: prevState.books.map(book =>
                (book.id !== id) ? book : {...book, rating}
            )
        }))
    }

    render() {
        const {addBook, removeBook, rateBook} = this;
        const {books} = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center"> Books</h1>
                    <hr/>
                    <AddBookForm onNewBook={addBook}/>
                    <BookList books={books} onRate={rateBook} onRemove={removeBook}/>
                </div>
            </div>
        )
    }
}