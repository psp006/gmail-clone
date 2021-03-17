import { createSelector } from 'reselect';

const selectMail = ( state ) => state.mail;

export const selectSendMailIsOpen = createSelector(
    [selectMail],
    mail => mail.sendMailIsOpen
)

export const selectSelectedMail = createSelector(
    [selectMail],
    mail => mail.selectedMail
)
 
