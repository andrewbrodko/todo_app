import { ADD_DATA } from '../actions'

var date = new Date();
date.setDate(date.getDate() + 1);
const defaultState = {
    head: '',
    text: '',
    date: date.toISOString().split('T')[0],
    time: '10:00'
}

export default (state = defaultState, action) => {
    switch (action.type) {
    case ADD_DATA:
        return {
            ...state,
            ...action.data
        };
    default:
        return state;
    }
}
