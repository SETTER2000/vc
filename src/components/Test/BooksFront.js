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
            books: [
                {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores delectus eos, iusto maiores omnis qui velit. Aut autem blanditiis commodi cum delectus deserunt dicta dolore dolorem doloribus eos est eveniet, facere fuga labore magni minus molestiae mollitia nam natus nostrum officia quas, saepe veniam veritatis vero vitae voluptas. Enim laudantium nemo nihil sapiente veritatis. Aut dicta error excepturi harum ipsa ipsum iste itaque molestias natus neque nihil quae quia, repudiandae, saepe ullam voluptates, voluptatum. Distinctio, officia totam. Ab aliquam animi architecto, consectetur corporis cum dolores eligendi esse eveniet harum illo iusto laboriosam laborum laudantium magnam molestias natus officiis pariatur perferendis quod repellat, saepe, tenetur totam veniam voluptatum. Asperiores, beatae cumque dignissimos dolorum ea et ex facere hic illum inventore iusto magnam nam natus, neque nihil, odit pariatur perferendis placeat praesentium quae quaerat quas reprehenderit unde vitae voluptatem? Aliquam aliquid aperiam asperiores aspernatur autem beatae consequatur consequuntur dolorem dolores eos error esse explicabo facere id impedit nisi, non obcaecati, provident quae quaerat qui quo quod ratione sequi ullam veniam voluptas, voluptatum. Incidunt officia ratione repellendus rerum sint. Accusantium dolor fugit laborum perferendis possimus quia quo repudiandae ullam? Ad alias aperiam atque delectus earum eum facere, harum libero minus nemo nulla quaerat quidem rem? Accusantium assumenda atque aut autem blanditiis corporis culpa cum dignissimos esse illum, impedit, inventore itaque iure, laboriosam libero magni maiores nemo nihil odio odit perferendis quis quod rem repellat ut veniam vero. Animi aut consectetur consequatur debitis dicta dolore doloremque, eius, error eveniet, ex iusto libero magnam mollitia provident quam rem sint soluta voluptate. Aliquam amet architecto assumenda at blanditiis cum dolorem eum ex, explicabo harum illo iure libero neque nesciunt obcaecati odit quod ratione rem sapiente similique! Accusantium assumenda at consequatur cum cupiditate excepturi hic mollitia neque nisi, nostrum nulla placeat porro quisquam sed totam ullam velit voluptas voluptatem. Architecto corporis, deleniti dignissimos eaque error magni, neque numquam obcaecati officiis omnis possimus provident quos, sequi soluta tempore! Ea ipsa minus sed! Accusamus aliquam aspernatur eligendi eveniet maxime odit quas quos voluptatem. Esse eum eveniet ipsa ipsum magnam minus molestiae provident quos rerum sunt! Quibusdam, quo, reiciendis?"
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. endi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                }, {
                    "title": "Foo Books!",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsum reiciendis sequi? A architecto assumenda eligendi, error itaque laudantium nemo perferendis porro quam, quo sed vel veniam voluptatem? Similique, suscipit."
                },
            ]
        };
        this.addBook = this.addBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    addBook(title, description) {
        this.setState(prevState => ({
            books: [
                ...prevState.books,
                {
                    id: v4(),
                    title,
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


    render() {
        const {addBook, removeBook} = this;
        const {books} = this.state;

        return (
            <div className="app">
                <AddBookForm onNewBook={addBook}/>
                <BookList books={books} onRemove={removeBook}/>
            </div>
        )
    }
}