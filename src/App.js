import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Console from './Components/Console';
import Loader from './Components/Loader';
import types from './Duck/FakeData/types';
import './App.css';

function App() {
  const fakeDataReducer = useSelector(state => state.fakeDataReducer);
  const dispatch = useDispatch();

  const hasToSucceed = () => {
    return Math.floor(Math.random() * Math.floor(2)) === 1;
  };

  const getFakeData = () => {
    dispatch({type: types.DATA_FETCH_STARTED});
    
    const type = hasToSucceed() ? types.DATA_FETCH_SUCCESS: types.DATA_FETCH_FAILED;

    setTimeout(() => {
      dispatch({type: type});
      dispatch({type: types.DATA_FETCH_FINISHED});
    }, 2000);
  };

  return (
    <div className="container">
      <div className="item">
        <Console />
      </div>
      <div className="item">
        <button onClick={() => { getFakeData() }}>Click here to simulate data load</button>

        {
          fakeDataReducer.isLoading ?
            <Loader /> : null
        }
      </div>
    </div>
  );
}

export default connect()(App);