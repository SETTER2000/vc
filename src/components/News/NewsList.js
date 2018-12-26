import React from 'react';
import {Component} from 'react';
import News from './News';

const getNews = category => new Promise((resolves, rejects) => {
    // const api = `http://localhost:3008/products#access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NldHRlci5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWMwN2YwMWJlOWYwMjYyZTkzNzhhMTBhIiwiYXVkIjpbImFuZ3VsYXIiXSwiaWF0IjoxNTQ1NDQwMDYwLCJleHAiOjE1NDU0NDcyNjAsImF6cCI6IjFrTUxLb3htTXR2dkdRSGVHbTRMa3BGM2pOMVIydEQxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSJ9.ic2nhGBYPVBS6efd9710fccMcBhAR8gOHwBdB04A8MQ&expires_in=7200&token_type=Bearer&state=myT3ZiU4wXEyzdaKvCaB~hlt.3_VxwN2&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6ImluczA5IiwibmFtZSI6ImluczA5QG1haWwucnUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNDNlNzgxMThlYTE2MWI1YmI1NWMyZWQ2YWY0MmI2OGY_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZpbi5wbmciLCJ1cGRhdGVkX2F0IjoiMjAxOC0xMi0yMlQwMDo1NDoxOS45NzdaIiwiaXNzIjoiaHR0cHM6Ly9zZXR0ZXIuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVjMDdmMDFiZTlmMDI2MmU5Mzc4YTEwYSIsImF1ZCI6IjFrTUxLb3htTXR2dkdRSGVHbTRMa3BGM2pOMVIydEQxIiwiaWF0IjoxNTQ1NDQwMDYwLCJleHAiOjE1NDU0NzYwNjAsImF0X2hhc2giOiJ6Z1BvWVRZaUhRdTZEczlSV21MaVNRIiwibm9uY2UiOiIxUDhHTkl0N2VtLmhyR0FLaGFrcGo5aFI1ZU9MRmY2ZCJ9.Yjp2pIuebJronRs_aeviZz6GN0e1DYPugFogO4gPNDw`;
    const api = `http://localhost:8080/result/${category}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => (request.status === 200) ?
        resolves(JSON.parse(request.response)) :
        rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send()
});


class NewsList extends Component {
    constructor() {
        super();
        this.state={
            news:[],
            loading:false,
            error:null
        }
    }

    componentWillMount() {
        this.setState({loading: true});
        getNews(this.props.category).then(
            news => {
                this.setState({news, loading: false})
            },
            error => {
                this.setState({error, loading: false})
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle')
    }

    render() {
        const {news, loading, error} = this.state;
        console.log(news);
        console.log('DAAA');
        return (
            <div className="row">
                <h1 className="text-center"> News </h1>
                <hr/>
                {(loading) ?
                    <div className="my-flex-cont">
                        <img  className="my-flex-box" src="/assets/spinners/5.gif" alt=""/>
                    </div> :
                    (news) ?
                        news.map((nw, i) =>
                            <News key={i} {...nw} />
                        ) :
                        <span>0 news loaded...</span>
                }
                {(error) ? <p>Error Loading News: server is not available</p> : ""}
            </div>
        )
    }
}


export default NewsList;