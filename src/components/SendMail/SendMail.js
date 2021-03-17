import React from 'react'

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {closeSendMail } from '../../redux/mail/mail.actions'

import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';

import firebase from 'firebase';
import { db } from '../../firebase/firebase.utils';

import './SendMail.css';

function SendMail({ closeSendMail  }) {
    const { register, handleSubmit, errors } = useForm( );
   
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add ({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp( )
         });
    };
    return (
        <div className='sendMail'> 
             <div className='sendMail_header'>
                 <h3>New Message</h3>
                 <CloseIcon onClick={closeSendMail} className='sendMail_close' />
             </div>
             <form onSubmit={handleSubmit(onSubmit)}>
                 <input 
                    name='to' 
                    type='text' 
                    placeholder='To'
                    ref={register({ required: true })}
                />
                    {errors.to && <p className='sendMail_error'>
                        To is required!</p>}
                 <input 
                    name='subject' 
                    type='text'  
                    placeholder='Subject'
                    ref={register({required:true})}
                 />
                    {errors.subject && <p className='sendMail_error'>
                    subject is required!</p>}
                 <input 
                    name='message' 
                    type='text' 
                    placeholder='Message...' 
                    className='sendMail_message'
                    ref={register({required:true})}
                 />
                  {errors.message && <p className='sendMail_error'>
                    Message is required!</p>}
                 <div className='sendMail_options'>
                     <Button 
                      className='sendMail_send'
                      variant='contained'
                      color='primary'
                      type='submit'
                     >
                         Send
                    </Button>
                 </div>
             </form>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    closeSendMail : ( ) => dispatch(closeSendMail ( ))
})

export default  connect( null, mapDispatchToProps) (SendMail);
