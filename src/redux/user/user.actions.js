import {  UserActionTypes } from './user.types';

export const loginUser = user => ({
type: UserActionTypes.LOGIN_USER,
payload: user
});

export const logoutUser = ( )=> ({
    type: UserActionTypes.LOGOUT_USER,
})