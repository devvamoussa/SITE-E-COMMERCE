import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from '../Reducers/index';
// import getPost from '../actions/get.action';

//creation du store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;