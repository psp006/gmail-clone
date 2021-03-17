import React from 'react';

import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './EmailRow.css';
import { fetchSelectedMail } from '../../redux/mail/mail.actions';

function EmailRow({id, subject, description, title, time }) { 
 const history = useHistory( );
 const dispatch = useDispatch( );
    
 const openMail = ( ) => {
 dispatch(fetchSelectedMail({
   id,   
   title, 
   subject, 
   time,
   description
 }))
 history.push('/mail')
 }
    return (
        <div className='emailRow' onClick= {openMail}>
            <div className='emailRow_options'>
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3>{title}</h3>
            <div className='emailRow_message'>
               <h4>{subject}</h4>
               <span className='emailRow_description'>{description}</span>
            </div>
            <p className='emailRow_time'>
                    {time}
            </p>
        </div>
    )
}


export default EmailRow
