import React from 'react';
import './css/Examine.css';
import Card from './Card';
class Examine extends React.Component{
    constructor(props){
        super(props)
        this.back=this.back.bind(this);
        this.ready=this.ready.bind(this);
    }
    back(){
        this.props.back();
    }
    ready(){
        this.props.ready();
    }
    render(){
        return (
            <div className = "Examine">
                <Card fields={this.props.fields} />
                <div  className='Card-buttons'>
                    <button className='Back-button' onClick={this.back}>
                        {' < Back to Form'}
                    </button>
                    <button className='Next-button' onClick={this.ready}>
                        {' Looks Good >'}
                    </button>
                </div>
            </div>
        );  
    }
}
export default Examine;
