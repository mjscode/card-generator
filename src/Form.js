import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(event){
        this.props.onSubmit(event);
    }
    onChange(e){
        this.props.onChange(e);
    }

    render(){
        const {firstName,lastName,companyName,email,phoneNumber}=this.props.fields;
        return (
            <form className="Form" onSubmit={this.onSubmit}>
                <div>
                <label>
                    First Name:
                </label>
                </div>
                <div>
                    <input  
                        type="text" 
                        name="firstName"
                        value= {firstName}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <label>
                        Last Name:
                    </label>
                </div>
                <div>
                    <input  
                        type="text" 
                        name="lastName"
                        value= {lastName}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                <label>
                    Company Name:
                </label>
                </div>
                <div>
                <input  
                        type="text" 
                        name="companyName"
                        value= {companyName}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                <label>
                    Email:
                </label>
                </div>
                <div>
                <input  
                        type="email" 
                        name="email"
                        value= {email}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                <label>
                    Phone Number:
                </label>
                </div>
                <div>
                <input  
                        type="text" 
                        name="phoneNumber"
                        value= {phoneNumber}
                        onChange={this.onChange}
                    />
                </div>
                <div className= "Button-row">
                    <button type="submit" > + Submit</button>
                </div>
            </form>
        );
    }
}
export default Form;