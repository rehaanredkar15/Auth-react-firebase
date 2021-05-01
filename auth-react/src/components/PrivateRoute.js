import React from "react";
import {Route,Redirect} from 'react-router-dom';
import {useAuth } from '../Contexts/AuthContext';
//this is a wrapper for our  cureent route
export default function PrivateRoute({component: Component,...rest}) {
  return(

  <Route
    {...rest}>
     render = {props => {

         currentUser ? <Component { ...props} /> : <Redirect to ="/login"

     }}
  </Route>;

  )
}
 