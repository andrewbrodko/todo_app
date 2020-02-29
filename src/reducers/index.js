import { combineReducers } from 'redux';

import repository from './repository'
import current from './current'
import description from './description'
import footer from './footer';

export default combineReducers({
    repository,
    current,
    description,
    footer
})
