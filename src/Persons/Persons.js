import React, {Component} from 'react';
import './Persons.css';
class Persons extends Component {
    state = {
        amount: 0
    }
    render(){
    return(
        <div className="Persons">
            <h1>{this.props.name}</h1>
            <button >+</button>
            <button>-</button>
            <p>Amount : {this.props.charge}</p>
        </div>
    )

    }
}

export default Persons;