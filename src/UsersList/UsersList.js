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
            <button onClick={this.props.add}>+</button>
            <button onClick={this.props.sub}>-</button>
            <p>Amount : {this.props.charge}</p>
        </div>
    )

    }
}

export default UsersList;