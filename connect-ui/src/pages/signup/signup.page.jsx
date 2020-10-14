import React from 'react';

import { connect } from 'react-redux';

import './signup.style.css'
import * as actions from '../../store/actions/auth';

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

        const {first_name,last_name,username,password} = this.state
        e.preventDefault()
        if(this.state.password1 !== this.state.password){
            alert("OPPS! PASSWORD DOES NOT MATCH ! TRY AGAIN");
            return;
        }

        this.props.onAuth(
            first_name,
            last_name,
            username,
            password
        )
 
    }


    render(){
        const {first_name,last_name,username,password} = this.state;
        return(
            <div className='form-group'>
                <form onSubmit={this.handlSubmit} >
                    <FormInput type="text"  name='first_name' onChange={this.handleChange} label="First Name" value={first_name} required/>
                    <FormInput type="text" name='last_name' onChange={this.handleChange} label="Last Name" value={last_name} required />
                    <FormInput type="text" name='username' onChange={this.handleChange} label="Username" value={username} required/>
                    <FormInput type="password" name='password' onChange={this.handleChange} label="Password" value={password} required/>
                    <FormInput type="password" name='password1' onChange={this.handleChange} label="Confirm Password" required />
                    <CustomButton type="submit" name='SIGN UP' value='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (first_name,last_name,username,password) => dispatch(actions.authSignUp(first_name,last_name,username,password)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);