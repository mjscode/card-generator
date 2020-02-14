import React from 'react';
import './css/Header.css';
class Header extends React.Component{
    render(){
        return (
            <div className = "App-header">
                <div className = "Heading">
                    <h1>Business Card Generator</h1>
                </div>
                <div className = "Sub-header">
                    <div className = "Description">
                        <div className = "Description-heading">
                            <h1> Grow your business with flashy cards </h1>
                        </div>
                        <div className = "Description-body">
                            <p>Get in front of customers when they're looking at your card. Let them see you 
                                mean business and they can trust your skills.
                            </p>
                            <div className = "Button-row"> 
                            <a href="#Main"><button>+ Start Here</button></a>
                            </div>
                        </div>
                    </div>
                    <div className = "Image">
                        <img src="blue_pic.jpg" alt="business cards"></img>
                    </div>
                    </div>
            </div>
        );
    }
}
export default Header;