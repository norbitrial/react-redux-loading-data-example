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
    
    setTimeout(() => {
      if (hasToSucceed()) {
        dispatch({type: types.DATA_FETCH_SUCCESS, data: [
          {
            id: 1,
            title: 'Last Christmas',
            count: 4,
            description: 'Drama/Romance',
          },
          {
            id: 2,
            title: 'Terminator: Dark Fate',
            count: 2,
            description: 'Fantasy/Sci-fi',
          },
          {
            id: 3,
            title: 'The Addams Family',
            count: 1,
            description: 'Fantasy/Horror',
          },
          {
            id: 4,
            title: 'Joker',
            count: 7,
            description: 'Drama/Thriller',
          },
          {
            id: 5,
            title: 'Countdown',
            count: 2,
            description: 'Thriller/Horror',
          },
        ]});
      } else {
        dispatch({type: types.DATA_FETCH_FAILED, data: 'Something went wrong'});
      }
      
      dispatch({type: types.DATA_FETCH_FINISHED});
    }, 1000);
  };

  return (
    <>
      <h1>Fake Data Store example</h1>
      <h4>This app simulates a fake API call, on purpose returns sometimes with success or failed response</h4>

      <button className="app-button" onClick={() => { getFakeData() }}>Click here to simulate data load</button>

      <table className="dataTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Count</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {
          fakeDataReducer.isLoading ?
            <tr><td colSpan={4}><Loader /></td></tr> :
            fakeDataReducer.items.length === 0 ?
            <tr><td colSpan={4}>{fakeDataReducer.errorMessage === null ? 'No results found' : fakeDataReducer.errorMessage}</td></tr> :
            fakeDataReducer.items.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.count}</td>
                  <td>{e.description}</td>
                </tr>
              )
            })
        }
        </tbody>
      </table>
    </>
  );
}

export default connect()(App);