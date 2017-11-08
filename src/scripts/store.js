import {createStore, combineReducers} from 'redux'
import React from 'react'

const initialState = {
    root: {message: "h!"}
};

export const FINISH_INITIAL_LOADING = 'FINISH_INITIAL_LOADING';

export class ReducerRoot extends React.Component
{

    static Reducer(state = {}, action)
    {
        switch (action.type)
        {
            case FINISH_INITIAL_LOADING:
                return Object.assign({}, state, {initialLoading: false});
            case 'SET_OFFLINE':
                return Object.assign({}, state, {offline: true});
            case 'SET_ONLINE':
                return Object.assign({}, state, {offline: undefined});
            default:
                return state
        }
    }
}

const reducers = combineReducers(
    {
        root: ReducerRoot.Reducer
    });

const store = createStore(reducers, initialState);
export default store;
