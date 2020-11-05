import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/CustomButton.components';

import './update.style.css';


class UpdateContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            image:null,
        }
    }


    
    handleChange = e => {
        this.setState({
            image:e.target.files[0]
        })
    }

    handleSubmit = e => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            "profile_pic",
            this.state.image,
            this.state.image.name
        )
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${this.props.token}`
        }

        axios.patch(`http://127.0.0.1:8000/accounts/${this.props.id}/update`,formData)
        .then(window.location.reload())
        .catch(error => console.log(error))
     
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input type={this.props.type} onChange={this.handleChange} />
                    <CustomButton type='submit' name='update' />
                </form>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        token:state.token
    }
}


export default connect(mapStateToProps)(UpdateContainer);