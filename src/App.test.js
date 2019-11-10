import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import App from './App';

const fakeDataReducer = {
  isLoading: false,
  items: [],
  errorMessage: null,
};
const mockStore = configureMockStore();
const store = mockStore({fakeDataReducer});

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<Provider store={store}>
                    <App  />
                  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});