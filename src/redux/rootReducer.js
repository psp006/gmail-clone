import { combineReducers } from 'redux';

import  mailReducer from './mail/mail.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
mail: mailReducer,
user: userReducer
})

