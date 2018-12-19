import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, FormGroup, Button} from 'react-bootstrap';


const AddBookForm = ({onNewBook = (f) => f}) => {

    let _title, _description;

    const submit = e => {
        e.preventDefault();
        onNewBook(_title.value, _description.value);
        _title.value = '';
        _description.value = '';
        _title.focus();
    };

    return (
        <form className="add-book" onSubmit={submit}>
            <div className="form-group">
                <input className="form-control" ref={input => _title = input} type="text"
                       placeholder="Название книги ..." required/>
            </div>
            <div className="form-group">
                <textarea className="form-control" ref={input => _description = input}
                          placeholder="Описание книги ..." required/>
            </div>
            <button className="btn btn-green">Submit</button>
        </form>
    )

};

AddBookForm.propTypes = {
    onNewBook: PropTypes.func
};

export default AddBookForm