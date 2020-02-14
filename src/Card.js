import React from 'react';
import './css/Card.css';
 
class Card extends React.Component{
    render(){
        const { firstName, lastName, companyName, email, phoneNumber}=this.props.fields;
        return(
            <div className = "Card" id='card'>
                <div className = "Header-row">
                    <span>{firstName} </span>
                    <span>{lastName}</span>
                </div>
                <div className="Center-row">
                    <h3>{companyName}</h3>
                </div>
                <div className="Bottom-row">
                    <span id='email'>{email}</span>
                    <span id='phoneNumber'>{phoneNumber}</span>
                </div>
         </div>
        )
    }
}
export default Card;