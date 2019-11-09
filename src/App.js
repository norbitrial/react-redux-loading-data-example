import React from 'react';
import { connect, useSelector } from 'react-redux';
import Console from './Components/Console';
import Loader from './Components/Loader';
import './App.css';

function App() {
  const fakeDataReducer = useSelector(state => state.fakeDataReducer);
  
  return (
    <div className="container">
      <div className="item">
        <Console />
      </div>
      <div className="item">
        <button>Click here to simulate data load</button>

        {
          fakeDataReducer.isLoading ?
            <Loader /> : null
        }
      </div>
    </div>
  );
}

export default connect()(App);