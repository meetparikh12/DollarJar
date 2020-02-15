import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
class Home extends Component{

    state = {
        name: 'Meet'
    }

    changeHandler = function (e) {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name);
    };

    render(){
        return (
            
            <div className="username">
                <input type="text" value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                <Link
                    to={{
                        pathname: "/users",
                        name: this.state.name  // your data array of objects
                    }}
                > 
                <button> Send name </button>
                </Link>
              
            </div>
        )
    }
}

export default Home;