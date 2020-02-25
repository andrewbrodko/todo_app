const defaultState = {
    id: 0,
    pos_description: 0
}

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'TASK_CLICKED':
        return {
            ...state,
            id: action.task.id
        };
    case 'UPDATE_POS_DESCRIPTION':
        return {
            ...state,
            pos_description: action.ref.current.offsetTop
        };
    default:
        return state;
    }
}
