import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {json_data} from "./json_data";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let words: string[] = json_data.words;
let word = words[Math.floor(Math.random()*words.length)];
console.log(word);
console.log('here')
root.render(
    <App word={word}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
