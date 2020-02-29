// ACTION TYPES
export const ADD_TASK = 'ADD_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const DRAG_TASK = 'DRAG_TASK'
export const SWAP_TASKS = 'SWAP_TASKS'
export const UPDATE_TASK = 'UPDATE_TASK'
export const ADD_DATA = 'ADD_DATA'
export const TASK_CLICKED = 'TASK_CLICKED'
export const UPDATE_POS_DESCRIPTION = 'UPDATE_POS_DESCRIPTION'
export const FOOTER_LOADED = 'FOOTER_LOADED'

// ACTION CREATORS
// repository.js
export const addTask = data => ({
    type: ADD_TASK,
    data
})

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id
})

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
})

export const dragTask = data => ({
    type: DRAG_TASK,
    data
})

export const swapTasks = data => ({
    type: SWAP_TASKS,
    data
})

export const submitTask = task => ({
    type: UPDATE_TASK,
    task
})

// current.js
export const addData = data => ({
    type: ADD_DATA,
    data
})

// description.js
export const taskClick = id => ({
    type: TASK_CLICKED,
    id
})

export const submitRef = ref => ({
    type: UPDATE_POS_DESCRIPTION,
    ref
})

// footer.js
export const onFooterLoaded = isLoaded => ({
    type: FOOTER_LOADED,
    isLoaded
})
