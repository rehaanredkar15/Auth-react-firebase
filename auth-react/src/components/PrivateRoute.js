import React from "react";
import {Route,Redirect} from 'react-router-dom';
import {useAuth } from '../Contexts/AuthContext';
//this is a wrapper for our  cureent route
export default function PrivateRoute({component: Component,...rest}) {
  
  const { currentUser} = useAuth()
  
  return(
    //cap
  <Route
    {...rest}>
     render = {props => {
    //we will render the component which gets passed when we have currentuser  , if we dont do this then after the logout the dashbaord will render so we arranged it will now  
         currentUser ? <Component { ...props} /> : <Redirect to ="/login"

     }}
  </Route>;

  )
}
 