import React from 'react';
import PropTypes from 'prop-types';


const AddBookForm = ({onNewBook = (f) => f}) => {

    let _title,  _author;

    const submit = e => {
        e.preventDefault();
        onNewBook(_title.value, _author.value);
        _title.value = '';
        _author.value = '';
        _title.focus();
    };

    return (
        <form className="form-inline" onSubmit={submit}>
            <div className="form-group">
                <label className="sr-only" >Name</label>
                <input className="form-control"  ref={input => _title = input} type="text" value="Встречный удар"
                       placeholder="Название книги ..." required/>
            </div>&nbsp;
            <div className="form-group">
                <label className="sr-only" htmlFor="exampleInputEmail2">Email</label>
                <input className="form-control" ref={input => _author = input} type="text"
                       placeholder="Автор книги ..." value="Макс Глебов" required/>
            </div>&nbsp;
            <button className="btn btn-green">Добавить</button>
            <hr/>
        </form>
    )

};

AddBookForm.propTypes = {
    onNewBook: PropTypes.func
};

export default AddBookForm