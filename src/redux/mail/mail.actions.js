import { MailActionTypes } from './mail.types';

export const openSendMail = ( ) => ({
type: MailActionTypes.OPEN_SEND_MAIL
});

export const closeSendMail = ( ) => ({
type: MailActionTypes.CLOSE_SEND_MAIL
});

export const fetchSelectedMail = (mailData ) => ({
    type: MailActionTypes.FETCH_SELECTED_MAIL,
    payload: mailData
})