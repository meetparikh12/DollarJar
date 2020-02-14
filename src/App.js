import React,{Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

import UsersList from './UsersList/UsersList';

class App extends Component {
  state = {
    newUserObj : {
    id: 0,
    username: '',
    charge: 0,
    },
    users : [],
    indexCount: 0,
    totalAmount: 0,
    extraCharge: 10,
  }
    handleChange = (e) => {
      this.setState({
      
        newUserObj : {
        id: this.state.indexCount,
        username: e.target.value,
        charge: 0
        },
      })
    }
      onSubmit = () => {
        if(this.state.newUserObj.username != ""){
        console.log(this.state.users);
        this.state.users.push(this.state.newUserObj);
        let us = this.state.users;
        this.setState({
          users: us,
          indexCount: this.state.indexCount + 1
        }) 
        }
      }
     
        addHandler = (userIndex) => {
        const userTemp = {...this.state.users[userIndex]};
        userTemp.charge = userTemp.charge + this.state.extraCharge;
        this.addReflect(this.state.extraCharge);
        const users = [...this.state.users];
        users[userIndex] = userTemp;
        this.setState({
          users
        })
      }

      subHandler = (userIndex) => {
      
        const userTemp = {
          ...this.state.users[userIndex]
        };
        userTemp.charge = userTemp.charge - this.state.extraCharge;
        this.subReflect(this.state.extraCharge);
        const users = [...this.state.users];
        users[userIndex] = userTemp;
        this.setState({
          users
        })

      }

      addReflect = (chargeRef) => {
        
        let ch = this.state.totalAmount + chargeRef;
 
        this.setState({
          totalAmount : ch
        })
      }

      subReflect = (chargeRef) => {
        let ch = this.state.totalAmount - chargeRef;
        this.setState({
          totalAmount: ch
        })
      }

      changePenalty = (e) => {
        this.setState({
          extraCharge: parseInt(e.target.value)
        })
      }
  
  render(){
    
    const { name } = this.props.location;
    return (
   
    <div className="App">
        
        <h1>Hey {name}!</h1>
    
        <label>
        Enter amount:
        <br></br>
        <input type="text" onChange={(e) => this.changePenalty(e)}/>
        </label>
     
        <form>
          <input type="text"   
            onChange={e => this.handleChange(e)}/>
          <input className = "listButton"  value="Add to List" onClick={this.onSubmit} type="reset"/>
        </form>
       
        <h3>Total: {this.state.totalAmount}</h3>
      
        {this.state.users.map((user,index) => {
          console.log(user);

        return <UsersList name={user.username} add = {this.addHandler.bind(this,index)} sub={this.subHandler.bind(this,index)} charge = {user.charge}
            clicked={this.clickHandler}

          />
        })}
    </div>
  );
}
}

export default App;
