import React,{Component} from 'react';
import './App.css';
import UsersList from './UsersList/UsersList';

class App extends Component {
  state = {
    newUserObj : {
    username: '',
    charge: 0,
    },
    users : [
    ],
    totalAmount: 0
  }

    handleChange = (e) => {
      this.setState({
        newUserObj : {
        username: e.target.value,
        charge: 0

        }
      })
    }
      onSubmit = () => {
        console.log(this.state.users);
        this.state.users.push(this.state.newUserObj);
        let us = this.state.users;
        this.setState({
          users: us
              })
        
      }

  render(){
    const { name } = this.props.location;
    return (
    <div className="App">
        <h1>Hey {name}!</h1>
        <form>
          <input type="text"   
            onChange={e => this.handleChange(e)}/>
          
          <input className = "listButton" type="reset" value="Add to List" onClick={this.onSubmit}/>
        </form>
        <h3>Total: {this.state.totalAmount}</h3>
        {this.state.users.map((user) => {
          console.log(user);
          return <UsersList name={user.username} charge = {user.charge}/>
        })}
    </div>
  );
}
}

export default App;
