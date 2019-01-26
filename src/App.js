import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import './my.css';
import {Link} from "react-router-dom";
import Login from './views/login/login';
import About from './views/About/About';
import Profile from './views/Profile/Profile';
import ColorGame from './views/game/game';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './views/error404';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
        {
          Login:"Login",
          Password:"Password"
        },
        {
          Login:"Amir",
          Password:"Amir"
        }
      ],
      check_for_logined: false,
    }
  } 
  changeThisCheck(){
    this.setState({check_for_logined:true});
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path= "/" render={(props)=><About check={this.state.check_for_logined}/>}/>
            <Route path= "/login" render={(props)=><Login users={this.state.users} funct={this.changeThisCheck.bind(this)} check={this.state.check_for_logined}/>}/>
            <Route path= "/Profile" render={(props)=><Profile check={this.state.check_for_logined}/>} />
            <Route path= "/game" render={(props)=><ColorGame check={this.state.check_for_logined}/>}/>
            <Route component={Error404}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
