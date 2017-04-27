import { createStore } from 'redux';
import primaryReducer from '../reducer/login';

let store = createStore(primaryReducer,['new store']);

console.log(store.getState())

export default store;