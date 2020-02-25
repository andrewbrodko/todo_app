import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import repository from './repository'
import current from './current'
import description from './description'
import footer from './footer';

export default combineReducers({
    // routing: routerReducer,
    repository,
    current,
    description,
    footer
});
