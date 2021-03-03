import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// Create a React element
class MyComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px', backgroundColor: 'lightblue' }}>
        <button>{this.props.text}</button>
      </div>
    )
  }
}

const myElement = <MyComponent text="Hello, world!" />

// Render it into the DOM
ReactDOM.render(myElement, document.querySelector('#pp'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
