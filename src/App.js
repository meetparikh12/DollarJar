import React,{Component} from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {
  state = {
    newPersonObj : {
    username: '',
    charge: 0,
    },
    persons : [
      {
      username: 'Meet',
      charge: 0
      },
      {
        username: 'Neel',
        charge: 0
      },
      {
        username: 'Sandeep',
        charge: 0
      }
    ],
    totalAmount: 0
  }

    handleChange = (e) => {
      this.setState({
        newPersonObj : {
        username: e.target.value,
        charge: 0

        }
      })
    }
      onSubmit = () => {
        console.log(this.state.persons);
        this.state.persons.push(this.state.newPersonObj);
        let ps = this.state.persons;
        this.setState({
          persons: ps
              })
        
      }

  render(){
    return (
    <div className="App">
        <input type="text"   
          onChange={e => this.handleChange(e)}/>
        
        <button onClick={this.onSubmit}>Click</button>
        <h3>Total: {this.state.totalAmount}</h3>
        {this.state.persons.map((person) => {
          console.log(person);
          return <Persons name={person.username} charge = {person.charge}/>
        })}
    </div>
  );
}
}

export default App;
