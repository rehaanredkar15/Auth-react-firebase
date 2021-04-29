import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext(); //created a context of react

export function useAuth() {
  return useContext(AuthContext); //function to use this context
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(); //state to manage the current user which will be updated when the user is changed

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
    //whenever this is called the user gets set
  }

  // using effect when ever the state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider vlaue={value}>{children}</AuthContext.Provider>;
}
