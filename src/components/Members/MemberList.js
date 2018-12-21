import React from 'react';
import {Component} from 'react';
import Member from './Member'
import '../../styles/MemberList.scss'
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send()
});

class MemberList extends Component {
    constructor() {
        super();
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    componentWillMount() {
        this.setState({loading: true});
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
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
        const {members, loading, error} = this.state;
        return (
            <div className="row">
                <h1 className="text-center"> Members ({members.length ? members.length:0})</h1>
                <hr/>
                {(loading) ?
                    <div className="my-flex-cont"><img  className="my-flex-box" src="/assets/spinners/1.gif" alt=""/></div> :
                    (members.length) ?
                        members.map((user, i) =>
                            <Member key={i} {...user} />
                        ) :
                        <span>0 members loaded...</span>
                }
                {(error) ? <p>Error Loading Members: error</p> : ""}
            </div>
        )
    }
}


export default MemberList