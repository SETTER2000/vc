import React from 'react';
import {Component} from 'react'
import fetch from 'isomorphic-fetch'

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({countryNames, loading: false}))

    }

    render() {
        const {countryNames, loading} = this.state;
        return (loading) ? <div className="my-flex-cont">
                <img  className="my-flex-box" src="/assets/spinners/2.gif" alt=""/>
            </div>  :
            (!countryNames.length) ?
                <div>No Country Names</div> :
                <div className="col-md-12">
                    <h1 className="text-center">Country List</h1>
                    <hr/>
                    <div className="list-group">
                        {countryNames.map((x, i) => <button type="button" key={i} className="list-group-item">{x}</button>)}
                    </div>
                </div>
    }
}

export default CountryList