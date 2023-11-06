import './App.css';
import Cookie from './assets/cookie.png'

import React from 'react';
import { useRef } from 'react';

function App() {

  let cookie = useRef('cookie');

  let spin = () => {
    cookie.current.classList.add('spin');
  }

  return (
    <div className="app">
      <img alt="cookie" src={Cookie} draggable="false" ref={cookie} onClick={spin}/>
    </div>
  );

}

export default App;

// Resources: ChatGPT, Mozilla Web Docs, W3Schools, Stack Overflow, Google, YouTube, and me (if needed) 
// Watch this video for a general overview on useRef: https://www.youtube.com/watch?v=A0T9-66uF74&ab_channel=LarryDev