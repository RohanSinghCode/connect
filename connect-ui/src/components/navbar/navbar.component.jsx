import React from 'react';

import * as actions from '../../redux/auth/auth.action';
import  {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './navbar.style.css';



const Navbar = ({isAuthenticated,logout}) => {
    return(
        <div className='container'>
           <nav className='navbar'>
                
                <div className="options">
                    {
                        isAuthenticated?(
                            <div className="options">
                             <Link to='/' className='option'>HOME</Link>
                             <Link onClick={logout} className='option'>LOGOUT</Link>
                             </div>
                            ):
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
        isAuthenticated:state.auth.token!==null
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);