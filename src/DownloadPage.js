import React from 'react';
import Card from './Card';

class DownloadPage extends React.Component{
        constructor(props){
            super(props)
            this.back=this.back.bind(this);
            this.download=this.download.bind(this);
        }
        back(){
            this.props.back();
        }
        download(){
            this.props.download();
        }
        render(){
            return (
                <div className = "Examine">
                    <Card fields={this.props.fields} />
                    <div  className='Card-buttons'>
                        <button className='Back-button' onClick={this.back}>
                            {' < Back to Form'}
                        </button>
                        <button className='Download-button' onClick={this.download}>
                            {' + Download '}
                        </button>
                    </div>
                    <div>
                        <h2>{ this.props.fields.waitMessage }</h2>
                    </div>
                </div>
            );  
        }
    }
    export default DownloadPage;