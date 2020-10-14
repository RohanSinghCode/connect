import React from 'react';
import { connect } from 'react-redux';


import './login.style.css';
import * as actions from '../../store/actions/auth';

import FormInput from '../../components/form-input/FormInput.component';
import CustomButton from '../../components/custom-button/CustomButton.components';




class LoginPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:'',
            error:'',
        }
    }

    handleChange = e => {
        var value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]:value
        })
    }


    handleSubmit = e => {
        const {username,password} = this.state

        e.preventDefault();

        this.props.onAuth(username,password);
        
        
    }

    

    render(){
        if(this.props.error){
            this.setState({error:'username or password is incorrect*'})
        }
        return(
            <div className='login-group' > 
                <p style={{color:"red"}}>{this.state.error}</p>
                <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='username' label='username' onChange={this.handleChange} required/>
                <FormInput type='password' name='password' label='password'onChange={this.handleChange}  required/>
                <CustomButton type='submit' name='LOGIN!' value='submit'/>
                </form>     
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
