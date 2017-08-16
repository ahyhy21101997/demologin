import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

getStore = (navReducer) => {

    const reducers = combineReducers({
        nav: navReducer
    });
    const store = createStore(reducers);

    return store;
}

export { getStore };