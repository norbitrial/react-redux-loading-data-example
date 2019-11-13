import React, { useCallback } from 'react';
import Loader from './Components/Loader';
import { connect, useSelector, useDispatch } from 'react-redux';
import types from './Duck/FakeData/types';
import service from './Services/FakeService';
import './App.css';

function App() {
  const fakeDataReducer = useSelector(state => state.fakeDataReducer);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch({type: types.DATA_FETCH_STARTED});

    const success = (data) => {
      dispatch({type: types.DATA_FETCH_SUCCESS, data});
    };

    const error = (error) => {
      dispatch({type: types.DATA_FETCH_FAILED, error});
    };
    
    service.getFakeData()
           .then(success)
           .catch(error);
  }, [dispatch]);
  
  const renderTableBodyContent = () => {
    if (fakeDataReducer.isLoading) {
      return <tr><td colSpan={4}><Loader /></td></tr>
    }
    
    if (fakeDataReducer.items.length === 0) {
      const message = fakeDataReducer.errorMessage === null ? 'No results found' : fakeDataReducer.errorMessage;

      return <tr><td colSpan={4}>{message}</td></tr>
    }
            
    return fakeDataReducer.items.map((e) => {
      return (
        <tr key={e.id}>
          <td>{e.id}</td>
          <td>{e.title}</td>
          <td>{e.count}</td>
          <td>{e.description}</td>
        </tr>
      )
    });
  };

  return (
    <>
      <h1>Fake Data Store example</h1>
      <h4>This app simulates a fake API call, on purpose returns sometimes with success or failed response</h4>

      <button className="app-button" onClick={onClick}>Click here to simulate data load</button>

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
            renderTableBodyContent() 
          }
        </tbody>
      </table>
    </>
  );
}

export default connect()(App);