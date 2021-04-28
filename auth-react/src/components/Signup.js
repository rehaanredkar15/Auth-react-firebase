import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const Signup = (props) => {
  return;
  <>
    <Card.Body>
    <h2 className="text-center mb-4"> Signup </h2>
     
       <Form>
         <Form.Group id = "email">
         <Form.Label>Email</Form.Label>
         <Form.Control type = "email" ref = {emailref} required />
         </Form.Group>


         <Form.Group id = "password">
         <Form.Label>Password</Form.Label>
         <Form.Control type = "password" ref = {passowrdref} required />
         </Form.Group>


         <Form.Group id = "confirm-password" >
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control type = "email" ref = {passwordConfirmref} required />
         </Form.Group>
        
       
        <Button type = "submit"> Sign Up </Button>
        </Form.Group>
        </Form.Label>

    </Card.Body>
    <Card.Body>
      <div className="w-100 text-center mt-2">
        Already have and account ? Log In
      </div>
    </Card.Body>
  </h2>;
};

export default Signup;
