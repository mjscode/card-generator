import React from 'react';
import MainRoutes from './MainRoutes';
import './css/Main.css';
class Main extends React.Component {
    render(){
        return (
            <div className = "Main" id= "Main">
                <MainRoutes />
            </div>
        );  
    }
}
export default Main;