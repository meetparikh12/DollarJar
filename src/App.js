import React,{Component} from 'react';
import './App.css';

import UsersList from './UsersList/UsersList';

class App extends Component {
  state = {
    newUser : "",
    users : [],
    indexCount: 0,
    totalAmount: 0,
    extraCharge: 10,
  }
    changeUserName = (e) => {
      
      this.setState({
      
        newUser : e.target.value
        
      })
      
      console.log(this.state.newUser);
    }
    onSubmit = (e) => {
      e.preventDefault();
      let newUserObj = {
        username: this.state.newUser,
        id: this.state.indexCount,
        charge: 0
      }
      
      let newVar = this.state.newUser;

      if(newVar.trim() !== ""){
      console.log(this.state.users);
      let userArray = this.state.users;
      userArray.push(newUserObj);
      this.setState({
        users: userArray,
        indexCount: this.state.indexCount + 1
      })
      }
    }
    
    addPenalty = (userIndex) => {
    const userTemp = {...this.state.users[userIndex]};
    userTemp.charge = userTemp.charge + this.state.extraCharge;
    this.addTotalPenalty(this.state.extraCharge);
    const users = [...this.state.users];
    users[userIndex] = userTemp;
    this.setState({
      users
    })
  }

    subPenalty = (userIndex) => {
    
      const userTemp = {
        ...this.state.users[userIndex]
      };
      userTemp.charge = userTemp.charge - this.state.extraCharge;
      this.subTotalPenalty(this.state.extraCharge);
      const users = [...this.state.users];
      users[userIndex] = userTemp;
      this.setState({
        users
      })

    }

    addTotalPenalty = (chargeRef) => {
      
      let ch = this.state.totalAmount + chargeRef;

      this.setState({
        totalAmount : ch
      })
    }

    subTotalPenalty = (chargeRef) => {
      let ch = this.state.totalAmount - chargeRef;
      this.setState({
        totalAmount: ch
      })
    }

    changePenalty = (e) => {
        if(e.target.value === ''){
        this.setState({
          extraCharge: null
        })
       } else{
           this.setState({
            extraCharge: parseInt(e.target.value)
          })
        }
      }
    
    render(){
      
      const { name } = this.props.location;
      return (
      
      <div className="App">
          
          <h1>Hey {name}!</h1>
        <form>
          <label>
          Enter Penalty: {this.state.extraCharge == null ? 0 : this.state.extraCharge}
          <br></br>
          <input type="number" placeholder="Enter amount" value ={this.state.extraCharge} onChange={(e)=>this.changePenalty(e)}/>
          </label>
        </form>
          <h3>Total: {this.state.totalAmount}</h3>

          <div>
            <input placeholder="Enter your name" type="text" value={this.state.newUser}
              onChange= {e => this.changeUserName(e)}/>
            
            <button className = "listButton" onClick={(e) => this.onSubmit(e)}>Submit</button>
          </div>
        
          {this.state.users.map((user,index) => {
            console.log(user);

          return <UsersList name={user.username} add = {this.addPenalty.bind(this,index)} 
          sub={this.subPenalty.bind(this,index)} charge = {user.charge}

            />
          })}
      </div>
    );
  }
}

export default App;
