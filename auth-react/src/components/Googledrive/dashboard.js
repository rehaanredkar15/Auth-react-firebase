import React from "react";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { Container } from "react-bootstrap";
export default function dashboard() {
  return (
    <div>
      <Navbar />
      <Container flud>
        <AddFolderButton />
      </Container>
    </div>
  );
}
