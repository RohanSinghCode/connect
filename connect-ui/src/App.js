import React from "react";
import {Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';

import "./App.css";

import SignUpPage from './pages/signup/signuppage.component';
import LoginPage from './pages/login/login';

class App extends React.Component {

  
  componentDidMount() {
    this.props.onTryAutoSignup();
    
  }
 
  render() {

    return (
      <div>
      <Switch>
        <Route  component={()=> <SignUpPage {...this.props}/>} path='/signup'  exact/>
        <Route component={()=> <LoginPage {...this.props}/>} path='/' isAuthenticated exact/>
      </Switch>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.token !== null 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
