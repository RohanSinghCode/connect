import React from "react";
import {Switch, Route ,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import "./App.css";

import SignUpPage from './pages/signup/signuppage.component';
import LoginPage from './pages/login/login';

class App extends React.Component {
 
  render() {
    return (
      <div>
      <Switch>
        <Route  component={SignUpPage} path='/' exact/>
        <Route component={LoginPage} path='/login' exact/>
      </Switch>
       
      </div>
    );
  }
}

// mapStateToProps = state => {
//   return{
//     isAuthenticated: state.token !== null 
//   }
// }


export default App;
