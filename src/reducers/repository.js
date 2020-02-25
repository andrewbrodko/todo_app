const defaultState = [
    {
        id: 0,
        head: 'sit amet',
        text: 'vehicula sapien',
        date: new Date(new Date().getTime() + 86400000 * 6),
        completed: false
    },
    {
        id: 1,
        head: 'efficitur tempor',
        text: 'ipsum aliquam',
        date: new Date(new Date().getTime() + 86400000 * 2),
        completed: false
    },
    {
        id: 3,
        head: 'eleifend lacinia',
        text: 'euismod consequat',
        date: new Date(new Date().getTime() + 86400000 * 6),
        completed: false
    },
    {
        id: 2,
        head: 'augue vitae',
        text: 'posuere laoreet purus',
        date: new Date(new Date().getTime() - 86400000 * 2),
        completed: false
    },
    {
        id: 4,
        head: 'amet placerat',
        text: 'porttitor sem',
        date: new Date(new Date().getTime() + 86400000 * 2),
        completed: false
    },
    {
        id: 5,
        head: 'quis ex accumsan',
        text: 'ipsum aliquam',
        date: new Date(new Date().getTime() + 86400000 * 6),
        completed: false
    },
    {
        id: 7,
        head: 'metus eget',
        text: 'ligula mi',
        date: new Date(new Date().getTime() + 86400000 * 6),
        completed: false
    },
    {
        id: 6,
        head: 'vitae felis',
        text: 'non lectus volutpat',
        date: new Date(new Date().getTime() - 86400000 * 2),
        completed: false
    },
    {
        id: 8,
        head: 'et rutrum lectus',
        text: 'lectus dictum',
        date: new Date(new Date().getTime() + 86400000 * 2),
        completed: false
    },
    {
        id: 9,
        head: 'mauris risus finibus',
        text: 'finibus velit',
        date: new Date(new Date().getTime() + 86400000 * 6),
        completed: false
    },
    {
        id: 10,
        head: 'mattis neque',
        text: 'vulputate facilisis',
        date: new Date(new Date().getTime() - 86400000 * 2),
        completed: false
    },
    {
        id: 11,
        head: 'convallis varius',
        text: 'dignissim eleifend lacinia',
        date: new Date(new Date().getTime() + 86400000 * 2),
        completed: false
    }
]

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'ADD_TASK':
        return [
            ...state,
            {
                id: new Date().getTime(),
                head: action.data.head,
                text: action.data.text,
                date: new Date(Date.parse(action.data.date + ' ' + action.data.time)),
                completed: false
            }
        ];
    case 'TOGGLE_TODO':
        return state.map(t =>
            t.id === action.task.id ? {
                ...t,
                completed: !t.completed
            } : t);
    case 'UPDATE_TASK':
        return state.map(t =>
            t.id === action.task.id ? {
                ...t,
                ...action.task
            } : t);
    default:
        return state;
    }
}
