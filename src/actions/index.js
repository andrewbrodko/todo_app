// var mockApiData = [
//     {
//         id: 1,
//         name: 'Enter Sandman'
//     },
//     {
//         id: 2,
//         name: 'Welcome Home'
//     },
//     {
//         id: 3,
//         name: 'Master of Puppets'
//     },
//     {
//         id: 4,
//         name: 'Fade to Black'
//     }
// ];

export const toggleTask = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const submitAddData = data => ({
    type: 'SUBMIT_ADD_DATA',
    data
})

export const addTask = data => ({
    type: 'ADD_TASK',
    data
})

export const taskClick = task => ({
    type: 'TASK_CLICKED',
    task
})

export const submitRef = ref => ({
    type: 'UPDATE_POS_DESCRIPTION',
    ref
})

export const submitTask = task => ({
    type: 'UPDATE_TASK',
    task
})

export const onFooterLoaded = isLoaded => ({
    type: 'FOOTER_LOADED',
    isLoaded
})

// export const passSplash = () => dispatch => {
//     setTimeout(() => {
//         dispatch({ type: 'SPLASH_PASS_SUCCESS', payload: true })
//     }, 2000)
// }
