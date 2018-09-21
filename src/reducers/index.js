import { combineReducers } from 'redux';

import vendas from './vendas';
import user from './user';

export default combineReducers({
    vendas,
    user
});