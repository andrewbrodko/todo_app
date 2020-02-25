const initialState = {
    isLoaded: false,
    onLoad: { }
};

export default function footer(state = initialState, action) {
    switch (action.type) {
    case 'FOOTER_LOADED':
        return {
            ...state,
            isLoaded: action.isLoaded
        };
    default:
        return state;
    }
}
