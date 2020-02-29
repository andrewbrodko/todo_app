import {
    TASK_CLICKED,
    UPDATE_DIV_OFFSET
} from '../actions'

const defaultState = {
    id: 0,
    div_offset: 0
}

export default (state = defaultState, action) => {
    switch (action.type) {
    case TASK_CLICKED:
        return {
            ...state,
            id: action.id
        };
    case UPDATE_DIV_OFFSET:
        return {
            ...state,
            div_offset: action.offset
        };
    default:
        return state;
    }
}
