import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../redux/user/user.actions';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {auth} from '../../firebase/firebase.utils';

import {Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';


import './Header.css';

function Header( ) {

 const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch( );

  const signOut = ( ) => {(
    auth.signOut( ).then(( ) => {
      dispatch(logoutUser( ));
    })
  )}

    return (
        <div className='header'>
             <div className='header_left'>
               <IconButton>
                 <MenuIcon />
               </IconButton>  
               <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                        alt=""
                />
              </div>
              <div className='header_middle'>
                   <SearchIcon  />
                   <input type='text' placeholder='Search mail' />
                   <ArrowDropDownIcon />
             </div>
             <div className='header_right'>
                <IconButton>
                 <AppsIcon />
                </IconButton>
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
                < Avatar src={user?.photoUrl} onClick={ signOut } />
               </div>
            </div>
    )
}

export default Header
