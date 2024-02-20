import CombineReducer from '../reducers/CombineReducer';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({reducer: CombineReducer})

export default store;
