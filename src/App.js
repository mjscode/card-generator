import React from 'react';
import Header from './Header';
import Main from './Main';
import './css/App.css';

function App() {
  return (
    <div className="background">
    <div className="App">
        <Header />
        <hr></hr>
        <Main />
    </div>
    </div>
  );
}

export default App;
