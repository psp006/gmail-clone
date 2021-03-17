import React from 'react';
import {auth,provider} from '../../firebase/firebase.utils';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/user/user.actions';

import { Button } from '@material-ui/core'
import './Login.css';

function Login( ) {
   const dispatch = useDispatch( );
   const signIn = ( ) => {
       auth.signInWithPopup(provider)
       .then(({user})=>{
           dispatch(loginUser({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL
           }))
       })
       .catch((error) => alert(error.message));
   } ;
    return (
        <div className='login'>
            <div className='login_container'>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                        alt=""
                />
            <Button
             variant='contained' color='primary' onClick={signIn}
            >
                Login
            </Button>
            </div>
        </div>
    )
}

export default Login
