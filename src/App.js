import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
  return (
    <div>
      <p>header</p>
      <p>footer</p>
    </div>
  );
}




export default IndecisionApp;


/*class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}*/



/*class Action extends React.Component {
  render() {
    return (
      <div>
        <button
        onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >What should I do?</button>
      </div>
    );
  }
}*/



/*class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
} */


/*class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}*/

/*class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined //there will be no errpr by default
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => 
       ({ error }));

    //if there's no error clear the input
    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}





class App extends Component {
  constructor (props){ 
    super(props)
    this.state = {
      animals: ['dog', 'cat', 'bird'],
      inputValue: '',
    }
  }
  addAnimal(){
    const newAnimals = [...this.state.animals, this.state.inputValue]
    this.setState({animals: newAnimals})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>
            {this.state.animals.map((animal)=> {
              return <li key={animal}>{animal}
              {animal.startsWith('c') ? <span> 'I like a nice {animal}'</span>: null} 
              </li>
            })}
          </ul>
        </p>
        <button onClick={()=> {this.addAnimal()}}>Add Animal</button>
        <input value={this.state.inputValue} type='text' onChange={e => {this.setState({inputValue:e.target.value})}} />
        <div>inputValue={this.state.inputValue}</div>
      </div>
    );
  }
} 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
    return {
      visibility: !prevState.visibility
    };
    });
  
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
    }
  };
  



  /*constructor (props){ 
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }

    });
}

handleMinusOne() {
  this.setState((prevState) => {
    return {
      count: prevState.count - 1
    }

  });
}

handleReset(){
  this.setState (() => {
    return {
      count: 0
    }
  })
}
render() {
return (
  <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.handleAddOne}>+1</button>
    <button onClick={this.handleMinusOne}>-1</button>
    <button onClick={this.handleReset}>reset</button>
  </div>
);
}*/
//}




