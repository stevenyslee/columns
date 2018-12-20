import React from 'react';
import ReactDOM from 'react-dom';
import Columns from './columns.jsx'
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
  }

  componentDidMount() {
    this.setState({
      1: [{id: 1, person: "A"}, {id: 5, person: "E"}],
      2: [{id: 2, person: "B"}],
      3: [{id: 3, person: "C"}, {id: 6, person: "F"}],
      4: [{id: 4, person: "D"}]
    });
    // axios.get('url').then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  shiftLeft(e) {
    this.setState((state, props) => {
      return { 
        [e - 1]: state[e - 1].concat(state[e]),
        [e]: [],
        };
    });
  }

  shiftRight(e) {
    this.setState((state, props) => {
      let next = Number(e) + 1;
      console.log(state);
      return { 
        [next]: state[next].concat(state[e]),
        [e]: [],
        };
    });
  }

  render() {
    return (
      <div id="board">
        {Object.keys(this.state).map((column, id) => {
            if (!id) {
              return <Columns key={column} column={column} people={this.state[column]} shiftLeft={null} shiftRight={this.shiftRight} />
            } else if (id === Object.keys(this.state).length - 1) {
              return <Columns key={column} column={column} people={this.state[column]} shiftLeft={this.shiftLeft} shiftRight={null} />
            } else {
              return <Columns key={column} column={column} people={this.state[column]} shiftLeft={this.shiftLeft} shiftRight={this.shiftRight} />
            }
          }, this)}
          }
      </div>
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
