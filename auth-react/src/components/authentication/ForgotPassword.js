import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import CenteredContainer from "./centeredContainer";
export default function ForgotPasword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //adding error message here
  async function handleSubmit(e) {
    e.preventDefault();

    //validation checks
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for further instructins");
    } catch {
      setError("Failed to Signin ");
    }

    setLoading(false);
  }
  return (
    <>
      <CenteredContainer>
        <Card.Body>
          <h2 className="text-center mb-4"> PasswordReset </h2>
          {error && <Alert variant="danger"> {error} </Alert>}{" "}
          {message && <Alert variant="sucess"> {message} </Alert>}{" "}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label> Email </Form.Label>{" "}
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>{" "}
            <Button className="w-100" disabled={loading} type="submit">
              Reset Password{" "}
            </Button>{" "}
          </Form>{" "}
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>{" "}
        <Card.Body>
          <div className="w-100 text-center mt-2">
            Need an account ?<Link to="/signup">SignUp </Link>
          </div>
        </Card.Body>{" "}
      </CenteredContainer>
    </>
  );
}
