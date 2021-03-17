import React, {useState, useEffect} from 'react';

import { IconButton,Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import Section from '../Section/Section.js';
import EmailRow from '../EmailRow/EmailRow.js';

import {db} from '../../firebase/firebase.utils';

import './EmailList.css';

function EmailList( ) {
    const [emails, setEmails] = useState([ ]);

    useEffect( ( ) => {
      db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
         setEmails(
             snapshot.docs.map((doc) => ({
                 id: doc.id,
                 data: doc.data( ),
             }))
         )
      );
    }, [ ]);

    return (
        <div className='emailList'>
            <div className='emailList_settings'>
                <div className='emailList_settingsLeft'>
                     <Checkbox />
                     <IconButton>
                         <ArrowDropDownIcon />
                     </IconButton>
                     <IconButton>
                         <RedoIcon />
                     </IconButton>
                     <IconButton>
                         <MoreVertIcon />
                     </IconButton>
                </div>
                <div className='emailList_settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
             </div>
             <div className='emailList_sections'>
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='promotions' color='green' />
             </div>
             <div className='emailList_list'>
                 {emails.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow 
                       id={id}
                       key={id}
                       title={to}
                       subject={subject}
                       description={message}
                       time={new Date(timestamp?.seconds * 1000).toUTCString( ) }
                    />
                 )
                 )}
             
             </div>
        </div>
    )
}

export default EmailList;
