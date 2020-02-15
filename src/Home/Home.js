import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
class Home extends Component{

    state = {
        name: '',
        toggle: false
    }

    changeHandler = function (e) {
         this.setState({
            name: e.target.value,
        })
    
    };

    render(){
        return (
            
            <div className="username">
                <input type="text" placeholder = "Enter name" 
                value={this.state.name} onChange={this.changeHandler.bind(this)}/>
                <Link
                    to={{
                        pathname: "/users",
                        name: this.state.name  // your data array of objects
                    }}
                > 
                <button disabled={!this.state.name}> Send name </button>
                </Link>
              
            </div>
        )
    }
}

export default Home;