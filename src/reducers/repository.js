import {
    ADD_TASK,
    COMPLETE_TASK,
    REMOVE_TASK,
    DRAG_TASK,
    SWAP_TASKS,
    UPDATE_TASK
} from '../actions'

const defaultState = [
    {
        id: 0,
        head: 'sit amet',
        text: 'vehicula sapien',
        date: new Date(new Date().getTime() + 86400000 * 6),
        style: '',
        completed: false
    },
    {
        id: 1,
        head: 'efficitur tempor',
        text: 'ipsum aliquam',
        date: new Date(new Date().getTime() + 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 3,
        head: 'eleifend lacinia',
        text: 'euismod consequat',
        date: new Date(new Date().getTime() + 86400000 * 6),
        style: '',
        completed: false
    },
    {
        id: 2,
        head: 'augue vitae',
        text: 'posuere laoreet purus',
        date: new Date(new Date().getTime() - 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 4,
        head: 'amet placerat',
        text: 'porttitor sem',
        date: new Date(new Date().getTime() + 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 5,
        head: 'quis ex accumsan',
        text: 'ipsum aliquam',
        date: new Date(new Date().getTime() + 86400000 * 6),
        style: '',
        completed: false
    },
    {
        id: 7,
        head: 'metus eget',
        text: 'ligula mi',
        date: new Date(new Date().getTime() + 86400000 * 6),
        style: '',
        completed: false
    },
    {
        id: 6,
        head: 'vitae felis',
        text: 'non lectus volutpat',
        date: new Date(new Date().getTime() - 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 8,
        head: 'et rutrum lectus',
        text: 'lectus dictum',
        date: new Date(new Date().getTime() + 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 9,
        head: 'mauris risus finibus',
        text: 'finibus velit',
        date: new Date(new Date().getTime() + 86400000 * 6),
        style: '',
        completed: false
    },
    {
        id: 10,
        head: 'mattis neque',
        text: 'vulputate facilisis',
        date: new Date(new Date().getTime() - 86400000 * 2),
        style: '',
        completed: false
    },
    {
        id: 11,
        head: 'convallis varius',
        text: 'dignissim eleifend lacinia',
        date: new Date(new Date().getTime() + 86400000 * 2),
        style: '',
        completed: false
    }
]

export default (state = defaultState, action) => {
    switch (action.type) {
    case ADD_TASK:
        return [
            ...state,
            {
                id: new Date().getTime(),
                head: action.data.head,
                text: action.data.text,
                date: new Date(Date.parse(action.data.date + ' ' + action.data.time)),
                style: '',
                completed: false
            }
        ];
    case COMPLETE_TASK:
        return state.map(t =>
            t.id === action.id ? {
                ...t,
                completed: !t.completed
            } : t);
    case REMOVE_TASK:
        return state.filter(t => t.id !== action.id);
    case DRAG_TASK:
        return state.map(t =>
            t.id === action.data.id ? {
                ...t,
                style: action.data.dragged ? t.style + ' dragged' : t.style.split(' ').filter(s => s !== 'dragged').join(' ')
            } : t);
    case SWAP_TASKS:
        var tempA = state.findIndex(t => t.id === action.data[0]);
        var res = [ ...state.slice(0, tempA), ...state.slice(tempA + 1) ];
        var tempB = res.findIndex(t => t.id === action.data[1]);
        if (tempB < tempA) {
            return [ ...res.slice(0, tempB), ...state.slice(tempA, tempA + 1), ...res.slice(tempB) ];
        }
        return [ ...res.slice(0, tempB + 1), ...state.slice(tempA, tempA + 1), ...res.slice(tempB + 1) ];
    case UPDATE_TASK:
        return state.map(t =>
            t.id === action.task.id ? {
                ...t,
                ...action.task
            } : t);
    default:
        return state;
    }
}
