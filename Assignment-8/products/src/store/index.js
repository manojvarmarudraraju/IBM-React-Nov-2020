import { createStore, combineReducers } from 'redux';

import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const rootReducer = combineReducers({
    products : productsReducer,
    categories : categoriesReducer
});

//const store = createStore(productsReducer);
//const store = createStore(categoriesReducer);

const store = createStore(rootReducer);
// store state = { products : [], categories : []}
export default store;