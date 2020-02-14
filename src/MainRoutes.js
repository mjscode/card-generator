import React from 'react';
import Validation from './Validation.js';
import Form from './Form';
import Examine from './Examine';
import DownloadPage from './DownloadPage.js';
import htmlToImage from 'html-to-image';

  class MainRoutes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            companyName:'',
            email:'',
            phoneNumber:'',
            wait: false,
            waitMessage: '',
            validated : false,
            ready: false
        };
        this.handleInputChanges=this.handleInputChanges.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.revokeValidation=this.revokeValidation.bind(this);
        this.ready=this.ready.bind(this);
        this.download=this.download.bind(this);
    };

    handleInputChanges(event){
        const value = event.target.value;
        const name= event.target.name;
        
        this.setState({ [name]: value});
    }

    async handleSubmit(event){
        event.preventDefault();
        this.setState({
            wait: true,
            waitMessage: "Please wait while we validate the form..."
        });
        let errorMessage = await Validation(this.state);
        this.setState({
            wait: false,
            waitMessage: ''
        });
        if(errorMessage){
            alert(errorMessage);
            return;
        }
        this.setState({
            validated:true
                });
    }
    revokeValidation(){
        this.setState({
            validated: false,
            ready: false
        })
    }
    ready(){
        this.setState({
            ready:true
        })
    }
    downloadImage(){
        var node = document.getElementById('card');
        htmlToImage.toCanvas(node)
        .then(function (canvas) {
            var img    = canvas.toDataURL("image/jpg");
            var link = document.createElement('a');
            link.download = 'business_card.jpg';
            link.href = img;
            link.click();
        })
        .catch(function (error) {
          alert('oops, something went wrong!', JSON.stringify(error));
        })
    }
     async download(){
        this.setState({
            waitMessage: 'Card is downloading ...'
        })
        await this.downloadImage();
        window.setTimeout(()=>{this.setState({
            waitMessage: ''
        })},2000);
    }
      render(){
        if(this.state.wait){
            return <div className='WaitMessage'>
                        <h1>{ this.state.waitMessage }</h1>
                    </div>
        }
        if (this.state.validated && !this.state.ready){
            return <Examine 
                        fields={this.state}
                        back={this.revokeValidation}
                        ready={this.ready}
                    />
        }
        if(this.state.validated && this.state.ready){
            return <DownloadPage
                    fields={this.state}
                    back={this.revokeValidation}
                    download={this.download}
                    />
        }  
        return <Form
                fields={this.state}
                onChange={this.handleInputChanges}
                onSubmit={this.handleSubmit}
            />;
        }
    }
  export default MainRoutes;


  