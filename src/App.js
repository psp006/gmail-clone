import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import {useDispatch} from 'react-redux';
import {  Switch, Route } from 'react-router-dom';


import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Mail from './components/Mail/Mail.js';
import EmailList from './components/EmailList/EmailList.js';
import SendMail from './components/SendMail/SendMail.js';
import Login from './components/Login/Login.js';

import {loginUser} from './redux/user/user.actions'
import {selectSendMailIsOpen} from './redux/mail/mail.selectors'
import {selectCurrentUser} from './redux/user/user.selectors';

import './App.css';
import { auth } from './firebase/firebase.utils.js';

function App({sendMailIsOpen, currentUser}) {
const dispatch = useDispatch( );
  useEffect ( ( ) =>{
    auth.onAuthStateChanged(user =>{
       if(user) {
         dispatch(loginUser({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
         })
         );
       }
    })
   }, [ ])
  return (
    <Route>
      {currentUser? (
      <div className="app">
      <Header />
      <div className='app_body'> 
        <Sidebar />
       <Switch>
        <Route exact path='/' component={ EmailList } />
        <Route path='/mail' component={ Mail  } />
       </Switch>
       </div>
     {sendMailIsOpen&&<SendMail />}
     </div>
      ) : (
       <Login />
      )}
    </Route>
    );
 }



const mapStateToprops = ( state ) => ({
  sendMailIsOpen: selectSendMailIsOpen(state),
  currentUser: selectCurrentUser
})

export default connect(mapStateToprops)(App);
