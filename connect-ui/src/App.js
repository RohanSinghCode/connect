import React from "react";
import "./App.css";

import SignUpPage from './pages/signup/signuppage.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      loading:true,

    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/").then(res =>{
      return res.json()
    }).then(data=>this.setState({name:data[0].tempName})).catch(e=>console.log(e))
  }

  

  render() {
    return (
      <div>
       <SignUpPage />
      </div>
    );
  }
}

export default App;
