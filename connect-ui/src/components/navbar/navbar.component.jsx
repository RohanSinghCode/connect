import React from 'react';

import * as actions from '../../store/actions/auth';
import  {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './navbar.style.css';



const Navbar = (props) => {
    return(
        <div className='container'>
           <nav className='navbar'>
                <div className="options">
                    <Link to='/' className='option'>HOME</Link>
                </div>
                <div className="options">
                    {
                        props.isAuthenticated?<Link onClick={props.logout} className='option'>LOGOUT</Link>:
                        <div className="options"> 
                            <Link to='/login' className='option'>LOGIN</Link>
                            <Link to='/signup' className='option'>SIGNUP</Link>

                        </div>
                        
                    }
                    
                </div>  
           </nav>    
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated:state.token!==null
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);