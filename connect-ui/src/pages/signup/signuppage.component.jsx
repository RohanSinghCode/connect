import React from 'react';

import './signuppage.style.css'


import FormInput from '../../components/form-input/FormInput.component';
import CustomButton from '../../components/custom-button/CustomButton.components';



class SignUpPage extends React.Component {

    constructor(){
        super();
        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            password:"",
            password1:""
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
        if(this.state.password1 !== this.state.password){
            alert("OPPS! PASSWORD DOES NOT MATCH ! TRY AGAIN");
            return;
        }

        var url = "http://127.0.0.1:8000/accounts/";
        fetch(url,{
            method:'POST',
            headers:{
               'Content-type':'application/json', 
            },
            body:JSON.stringify(this.state)
        }).then(response => {
            response.json()
            this.setState({
                first_name:"",
                last_name:"",
                username:"",
                password:""
            })
        }).catch(err=>console.log(err))
    }


    render(){
        const {first_name,last_name,username,password} = this.state;
        return(
            <div class='form-group'>
                <form onSubmit={this.handlSubmit} >
                    <FormInput type="text"  name='first_name' onChange={this.handleChange} label="First Name" value={first_name} required/>
                    <FormInput type="text" name='last_name' onChange={this.handleChange} label="Last Name" value={last_name} required />
                    <FormInput type="text" name='username' onChange={this.handleChange} label="Username" value={username} required/>
                    <FormInput type="password" name='password' onChange={this.handleChange} label="Password" value={password} required/>
                    <FormInput type="password" name='password1' onChange={this.handleChange} label="Confirm Password" required />
                    <CustomButton type="submit" name='SIGN UP' value='submit' />
                </form>
                <h1>{this.state.lname}</h1>
            </div>
        )
    }
}

export default SignUpPage;