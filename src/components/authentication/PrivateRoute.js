import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  //we will render the component which gets passed when we have currentuser  , if we dont do this then after the logout the dashbaord will render so we arranged it will now
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
