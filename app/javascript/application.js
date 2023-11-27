import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Greeting />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
