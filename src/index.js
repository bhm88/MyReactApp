// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create react component
const App=() =>{
    return <div>Hi There !!</div>
};

//take react component and show it on screen
ReactDOM.render(
    <App />,
document.querySelector('#root')
);