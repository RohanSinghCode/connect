import React from 'react';
import axios from 'axios';


import {connect} from 'react-redux';

import './landing.style.css';


import ImageContainer from '../../components/image-container/image-container.componenet';
import CustomButton from '../../components/custom-button/CustomButton.components';
import UpdateContainer from '../../components/update-container/update.componenet';


class LandingPage extends React.Component {

    constructor(){
        super();

        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            path:"",
            id:"",
            check:false
        }
    }

    componentDidMount(){
        if(this.props.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${this.props.token}`
            }
            axios.get("http://127.0.0.1:8000/accounts/userdetails").then(
                resp=>{
                    this.setState({
                        first_name:resp.data.user.first_name,
                        last_name:resp.data.user.last_name,
                        username:resp.data.user.username,
                        id:resp.data.user.id,
                        path:resp.data.profile_pic
                    })
                    console.log(resp.data)
                } 
                
            ).catch(err => console.log(err))
        }
    }

    
    onClick = e => {
        this.setState(state=>({
            check: !state.check
        }));
        
    }

  

    render() {
        return(
            <div className='landing-page-group'>
                <div className='left'>
                        <ImageContainer  path={this.state.path} />
                        <CustomButton name='change' className='button' onClick={this.onClick} />  
                        {
                            this.state.check?<UpdateContainer type='file' id={this.state.id} />:null
                           
                        } 
                </div>
              
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token:state.token
    };
}


export default connect(mapStateToProps)(LandingPage);