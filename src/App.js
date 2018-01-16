import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./loginComponent/login"
import Home from "./HomeComponent/Home"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* {element}
        <ChildComponent name="Sandhya" city="Guntur"/>
        <ChildComponent name="Syam" city="Srikakulam"/>        
        <ChildComponent name="Tanuja" city="Vijayawada"/>
        <ChildComponent name="Bala" city="Elamanchli"/>
        <ChildComponent name="Hareesh" city="Srikakulam"/>
        <ChildComponent name="Vinay" city="Nalgonda"/>
        <ChildComponent name="Sanjana" city="Vizag"/>
        <Clock/>
        <ClickAction/>
        <ListDisplay/>
        <FormElement/> */}

        {/* <ul>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
        <hr /> */}
        <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
        {/* <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Login' component={Login} />
        </Switch> */}
        {/* <Login/> */}
      </div>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name} from {this.props.city}</h2>
        <p>How are you?</p>
        <p>what do you want to have</p>
      </div>
    )
  }
}

function helloWorld(user) {
  return user.firstName + '' + user.lastName
}

const user = {
  firstName: "Syam",
  lastName: "Reddy"
}

const element = (
  <h1>
    Hello , {helloWorld(user)}
  </h1>
)

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState(
          {time: new Date()}
        )
      },1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return(
      <div>
        <h1>Hello everyone, </h1>
        <h6>Now the time is {this.state.time.toLocaleTimeString()}</h6>
      </div>
    )
  }
}

class ClickAction extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showNewlyAdded: false
    }

    this.addUsers = this.addUsers.bind(this);
    this.deleteUsers = this.deleteUsers.bind(this);
  }

  addUsers() {
    this.setState(
      {
        showNewlyAdded: true,
        name: "Srinari",
        city: "Kodadha"
      }
    )
  }

  deleteUsers() {
    this.setState(
      {
        showNewlyAdded: false,
        name: "",
        city: ""
      }
    )
  }

  render() {
    return(
      <div>
        <button onClick={this.addUsers}>Add</button>
      {
        this.state.showNewlyAdded ? 
        <div>
          <h1>hello {this.state.name} from {this.state.city}</h1>
          <button onClick={this.deleteUsers}>Delete</button>
        </div> : 
        null
      }
      </div>
    )
  }

}

class ListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Sandhya"
    }

    this.listElements = [
      {name: "Tab1", id: 1},
      {name: "Tab2", id: 2},
      {name: "Tab3", id: 3}
    ]
    this.listItems = ""
    this.showListItems = this.showListItems.bind(this);
    // this.showListItems();
  }

  showListItems(){
    console.log("hai")
    // return <p>hai</p>
    this.listElements.map((numbers) => {
      console.log(numbers);
      this.listItems =  <li>{numbers.name} bhi</li>
    })
  }

  render() {
    return(
      <div>
        <ul>
          {/* {this.listItems} */}
          {
            this.listElements.map(element => {
              return <li key={element.id}>{element.id}. {element.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

class FormElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.inputChanged = this.inputChanged.bind(this);
    // this.passwordChanged = this.passwordChanged.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  
  inputChanged(event){
    let name = event.target.name;
    let value = event.target.value;
    this.setState(
      {
        [name]: value
      }
    )
  }

  // passwordChanged(event){
  //   console.log(event);
  //   console.log(this.state.email);
  //   console.log(this.state.password);
  // }

  formSubmit(event) {
    console.log(event.target.value);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log("submitted");
  }

  render() {
    return(
      <form onSubmit={this.formSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.inputChanged}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.inputChanged}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default App;
