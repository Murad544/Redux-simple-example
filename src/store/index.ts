import {configureStore} from '@reduxjs/toolkit';

const counterReducer = (state = {counter: 0, show: true}, action:any) => {
    if (action.type === 'increament') {
        return {
            counter: state.counter + 1,
            show: state.show
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            show: state.show
        };
    }

    if (action.type === 'decreament') {
        return {
            counter: state.counter - 1,
            show: state.show
        };
    }

    if (action.type === 'toggleCounter') {
        return {
            counter: state.counter,
            show: !state.show
        };
    }

    return state
}

const store = configureStore({
    reducer: { counter: counterReducer}
});

export default store