import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SearchMovies from "./searchMovies";

class Main extends React.Component
{
    render(){
       
       return (
         <div className="container">
         
         <h1 className="t">Movie Search </h1>
           <SearchMovies/>
           </div>
               );
      }
}

ReactDOM.render(
  // <React.StrictMode>
     //<App />
   //</React.StrictMode>
   <Main />,
   document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
