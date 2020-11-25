import React from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.components';

import axios from 'axios';
import {connect} from 'react-redux';


import './newpost.style.css';


class NewPost extends React.Component {

    constructor()
    {
        super();
        this.state = {
            caption:"",
            img:null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleFile = e => {
        this.setState({
            img:e.target.files[0]
        })
    }

    handleSubmit = e => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            'post_image',
            this.state.img
        )
        formData.append(
            'post_caption',
            this.state.caption
        )
        
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:  `Token ${this.props.token}`
        }

        axios.post("http://127.0.0.1:8000/posts/create-list",formData).catch(err=>console.log(err))

    }

    render()
    {
        return (
            <div >
                <form className='new-post' onSubmit = {this.handleSubmit} >
                    <textarea name='caption' rows="5" cols="105" className='post-input' onChange={this.handleChange}/>
                    <FormInput type='file' label='' className='post-file' name='img' onChange={this.handleFile}/>
                    <CustomButton type='submit' name='POST!' className='post-submit' />    
                </form>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        token:state.token,
    }
}

export default connect(mapStateToProps)(NewPost);