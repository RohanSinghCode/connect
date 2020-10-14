import React from "react";
import {Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';

import "./App.css";

import SignUpPage from './pages/signup/signup.page';
import LoginPage from './pages/login/login.page';
import LandingPage from  './pages/landingpage/landing.page';
import Navbar from './components/navbar/navbar.component';



class App extends React.Component {

  
  componentDidMount() {
    this.props.onTryAutoSignup();
    
  }
 
  render() {

    return (
      <div> 
      <Navbar />
      <Switch>
        <Route  component={()=> <SignUpPage {...this.props}/>} path='/signup'  exact/>
        <Route component={()=> <LandingPage {...this.props} />} path='/' exact/>
        <Route render={()=>
        this.props.isAuthenticated?(
        <Redirect to='/' />)
        :(<LoginPage {...this.props} />)} exact path='/login' />)
      
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
