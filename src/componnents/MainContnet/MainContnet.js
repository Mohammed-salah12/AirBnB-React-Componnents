import React from "react";
import MainPic from '../../images/mainPic.png'
import './MainContent.css'

export default function MainContnet() {
    return (
        <div className="MainContentContainerDiv">
            <img className="MainPic" src={MainPic} alt="MainPic" />

        </div>
    );
}