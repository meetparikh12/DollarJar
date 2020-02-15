import React,{Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Users from './Users/Users';


class App extends Component {
  
  render(){  
    return(
        
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
    );
  }
}

export default App;
