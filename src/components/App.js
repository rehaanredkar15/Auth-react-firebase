import React from "react";
import Signup from "./authentication/Signup";
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Googledrive/dashboard";
import Login from "./authentication/Login";
import Profile from "./authentication/Profile";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";

import UpdateProfile from "./authentication/UpdateProfile";
function App() {
  return (
    //

    // <CenteredContainer>
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/user" component={Profile} />

            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            <PrivateRoute
              exact
              path="/folder/:folderId"
              component={Dashboard}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    //</CenteredContainer>
  );
}

export default App;
