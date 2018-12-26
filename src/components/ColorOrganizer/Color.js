import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import '../../styles/Color.scss'

class Color extends Component {
    /*
    * воспользуемся методом componentWillMount для инициализации объектов цвета
    * с помощью стиля и установим для всех четырех элементов Color серый цвет фона
    * стр. 155
    * */
    componentWillMount() {
        this.style = {backgroundColor: "#CCC"};
    }

    /*
     * Производительность нашего приложения можно повысить, предотвращая обновление
     * цветов, когда их значения свойств не изменялись. Это можно сделать
     * путем добавления в жизненный цикл обновления метода shouldComponentUpdate.
     * Он возвращает либо true, либо false (true возвращается, когда компонент нужно
     * обновить, а false — когда обновление должно быть пропущено)
     * */
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating
    }

    /*
    * добавить метод componentWillUpdate, чтобы удалить серый фон
    * из каждого цвета непосредственно перед обновлением последнего.
    * Процесс обновления будет приостановлен с выдачей оповещения
    * стр. 160
    * */
    componentWillUpdate(nextProps) {
        const {title, rating} = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = "#2d2fff";
        this.refs.title.style.color = "#ffb66b";
       alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    /*
    * Выведем в консоль сообщение после обновления компонента. В методе componentDidUpdate
    * сравним текущие свойства со старыми, чтобы увидеть, повысился рейтинг или понизился.
    * */
    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);
        this.refs.title.style.backgroundColor = "";
        this.refs.title.style.color = "#41a071";
    }


    render() {
        const {title, color, rating, onRemove, onRate} = this.props;
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color" style={{backgroundColor: color}}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
};
export default Color
