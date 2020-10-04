import React from 'react';



import './login.style.css';


import FormInput from '../../components/form-input/FormInput.component';
import CustomButton from '../../components/custom-button/CustomButton.components';



class LoginPage extends React.Component {

    constructor(){
        super();

        this.state = {
            username:'',
            password:''
        }
    }

    render(){
        return(
            <div class='login-group'>
                <form>
                <FormInput type='text' name='username' label='username' />
                <FormInput type='password' name='password' label='password'/>
                <CustomButton type='submit' name='LOGIN!' value='submit'/>
                </form>
                
            </div>
        )
    }

}


export default LoginPage;
