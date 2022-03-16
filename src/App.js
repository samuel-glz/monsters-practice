
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: 'Samuel', lastname: 'Gonzalez' },
      occupation: 'Developer'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Name: {this.state.name.firstname} {this.state.name.lastname}. <br></br>Occupation: {this.state.occupation}
          </p>
          <div>
            <button
              className='mr-2'
              onClick={() => {
                this.setState(
                  () => {
                    return {
                      name: {firstname: 'John', lastname: 'Wick'},
                      occupation: 'Assassin'
                    }
                  },
                  () => {
                    console.log(this.state.name)
                  }
                )
              }}>
              Change Person
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
