import React from 'react';

const AddColorForm = ({onNewColor = f => f}) => {
    let _title, _color, _name;
    const submit = e => {
        e.preventDefault(); // Отменяет действие по умолчанию для события onSubmit, отправку формы методом GET
        onNewColor(_title.value, _color.value, _name.value);
        /* Очищает поля формы после получения значений из них */
        _title.value = '';
        _name.value = '';
        _color.value = '#000000';
        _title.focus()
    };
    /*const getValidationState = () => {
        const length = _name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    };

    const handleChange = (e) =>  _name.value = e.target.value ;*/

    return (
        <form onSubmit={submit}>
            <input ref={input => _name = input} type="text" placeholder="you name" required/>
            <input ref={input => _title = input} type="text" placeholder="color title..." required/>
            <input ref={input => _color = input} type="color" required/>
            <button>ADD</button>
        </form>
    )
};


export default AddColorForm