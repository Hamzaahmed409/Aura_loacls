import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ModalReducer from './ModalReducer';
import HeaderReducer from './HeaderReducer';


export default combineReducers({
  AuthReducer,
  ModalReducer,
  HeaderReducer
});
