import React, { Component } from "react";

// https://randomuser.me/api/?results=50

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      people: []
    }
  }

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}
        >Increase Count
        </button>

        <button
          onClick={async () => {
            const url = 'https://randomuser.me/api/?results=50'
            const response = await fetch(url)
            const data = await response.json()
            this.setState({
              people: data.results.map(person => {
                
              })
            }, () => {
              console.log(this.state.people)
            }
            )
          }}
        >Generate people
        </button>

      </div>
    )
  }
}

export default App;
