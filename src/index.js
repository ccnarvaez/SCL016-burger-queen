import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {Header, Menu} from './Components';

// import reportWebVitals from './reportWebVitals';



class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />  
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));










// Default 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
