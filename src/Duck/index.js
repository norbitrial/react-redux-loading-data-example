import { combineReducers } from "redux";
import fakeDataReducer from './FakeData/reducer';

const reducers = combineReducers({fakeDataReducer});

export default {
    reducers,
};