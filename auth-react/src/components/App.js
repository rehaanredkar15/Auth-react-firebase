import React from "react";
import Signup from "./authentication/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Googledrive/dashboard";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import CenteredContainer from "./authentication/centeredContainer";
function App() {
  return (
    // <CenteredContainer>
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
    //  </CenteredContainer>
  );
}

export default App;
