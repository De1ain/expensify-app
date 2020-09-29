import { createStore } from 'redux';

// Action generators:

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});


//Reducer:
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

// prints the store state everytime store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

// unsubscribe();

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));