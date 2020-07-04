import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import AuthButton from "./AuthButton"

function Header() {
    return (
        <AppBar>
            <div>Home</div>  
            <div>Login</div> 
            <AuthButton />
        </AppBar>
    )
}

export default Header;