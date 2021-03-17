import { MailActionTypes } from "./mail.types";

const INITIAL_STATE = {
    selectedMail: null,
   sendMailIsOpen: false
}

const mailReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case MailActionTypes.FETCH_SELECTED_MAIL: 
        return{
            ...state,
          selectedMail: action.payload
        }
        case MailActionTypes.OPEN_SEND_MAIL:
        return{
            ...state,
        sendMailIsOpen: true
        }
        case MailActionTypes.CLOSE_SEND_MAIL: 
        return{
            ...state,
            sendMailIsOpen: false
        }
      default: 
       return state;
    }
  }

  export default mailReducer;