import React, {Component} from 'react';
import './UsersList.css';
class UsersList extends Component {
    state = {
        amount: 0
    }
    render(){
    return(
        <div className="UsersList">
            <h1>{this.props.name}</h1>
            <button >+</button>
            <button>-</button>
            <p>Amount : {this.props.charge}</p>
        </div>
    )

    }
}

export default UsersList;