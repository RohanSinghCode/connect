import React from 'react';

import './signuppage.style.css'

class SignUpPage extends React.Component {

    constructor(){
        super();
        this.state = {
            fname:"",
            lname:"",
            username:"",
            password:""
        }
    }


    handleChange = e => {
        var value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]:value
        })
    }

    handlSubmit = e => {
        e.preventDefault()
        console.log('fname:',this.state.fname)
        var url = "http://127.0.0.1:8000/accounts/createuserapi/";
        fetch(url,{
            method:'POST',
            headers:{
               'Content-type':'application/json', 
            },
            body:JSON.stringify(this.state)
        }).then(response => {
            response.json()
            this.setState({
                fname:"",
                lname:"",
                username:"",
                password:""
            })
        }).catch(err=>console.log(err))
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handlSubmit}>
                    <input type="text"  name='fname' onChange={this.handleChange} />
                    <input type="text" name='lname' onChange={this.handleChange} />
                    <input type="text" name='username' onChange={this.handleChange} />
                    <input type="password" name='password' onChange={this.handleChange} />
                    <button type="submit" name='submit'  />
                </form>
                <h1>{this.state.lname}</h1>
            </div>
        )
    }
}

export default SignUpPage;