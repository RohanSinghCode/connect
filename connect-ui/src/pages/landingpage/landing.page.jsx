import React from 'react';
import axios from 'axios';


import {connect} from 'react-redux';

import './landing.style.css';


import ImageContainer from '../../components/image-container/image-container.componenet';


class LandingPage extends React.Component {

    constructor(){
        super();

        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            path:""
        }
    }

    componentWillMount(){
        if(this.props.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${this.props.token}`
            }
            axios.get("http://127.0.0.1:8000/accounts/dp").then(
                resp=> this.setState({
                    first_name:resp.data.user.first_name,
                    last_name:resp.data.user.last_name,
                    username:resp.data.user.username,
                    path:resp.data.profile_pic
                })
            ).catch(err => console.log(err))
        }
     
    }
    

  

    render() {
        return(
            <div>
                <ImageContainer path={this.state.path} />
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