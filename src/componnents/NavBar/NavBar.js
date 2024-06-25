import React from "react";
import Logo from '../../images/logo.png'
import './NavBar.css'
export default function NavBar() {
    return (
        <div className="NavBarContainerDiv">
            <nav className="Nav">
                <img className="logo" src={Logo} alt="Logo" />
            </nav>
        </div>
    );
}